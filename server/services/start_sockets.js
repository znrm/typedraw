const socketIO = require('socket.io');
const handleText = require('./handle_text');
const handleImage = require('./handle_image');

const documentSessions = {};

const startSession = documentId => {
  documentSessions[documentId] = {
    connections: 0,
    imageData: ''
  };
};

const startSockets = server => {
  const io = socketIO.listen(server);

  io.sockets.on('connection', socket => {
    console.log('New socket connection has been established');

    socket.on('document', documentId => {
      socket.join(documentId);

      if (documentSessions[documentId] === undefined) startSession(documentId);

      const documentSession = documentSessions[documentId];

      const saveRegularly = setInterval(() => {
        socket.emit('saveImage');
      }, 10000);

      socket.emit('loadImage', documentSession.imageData);

      socket.on('drawing', image => {
        const responseImage = handleImage(image);

        socket.to(documentId).emit('image', responseImage);
      });

      socket.on('typing', text => {
        const responseText = handleText(text);

        socket.to(documentId).emit('text', responseText);
      });

      socket.on('imageDataURI', imageDataURI => {
        console.log('recieved image data');
        documentSession.imageData = imageDataURI;
      });

      socket.on('disconenct', () => {
        documentSession.connections -= 1;
        clearInterval(saveRegularly);
        // save the image data in persistent storage if no more connections
      });
    });
  });
};

module.exports = startSockets;
