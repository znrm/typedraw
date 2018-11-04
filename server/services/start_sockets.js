const socketIO = require('socket.io');
const handleText = require('./handle_text');
const handleImage = require('./handle_image');
const DocumentSessions = require('./document_sessions');

const startSockets = server => {
  const documentSessions = new DocumentSessions();

  const io = socketIO.listen(server);

  io.sockets.on('connection', socket => {
    socket.on('document', documentId => {
      documentSessions.newConnection(documentId);

      socket.join(documentId);

      const saveRegularly = setInterval(() => {
        socket.emit('saveImage');
      }, 10000);

      socket.emit('loadImage', documentSessions.getImageData(documentId));

      socket.on('drawing', image => {
        const responseImage = handleImage(image);

        socket.to(documentId).emit('image', responseImage);
      });

      socket.on('typing', text => {
        const responseText = handleText(text);

        socket.to(documentId).emit('text', responseText);
      });

      socket.on('imageDataURI', imageDataURI => {
        console.log('Recieved image data');
        documentSessions.saveImageData(documentId, imageDataURI);
      });

      socket.on('disconnect', () => {
        documentSessions.disconnection(documentId);
        clearInterval(saveRegularly);
        // save the image data in persistent storage if no more connections
      });
    });
  });
};

module.exports = startSockets;
