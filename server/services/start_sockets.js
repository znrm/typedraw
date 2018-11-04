const socketIO = require('socket.io');
const handleText = require('./handle_text');
const handleImage = require('./handle_image');
const DocumentSessions = require('./document_sessions');

const startSockets = server => {
  const documentSessions = new DocumentSessions();

  const io = socketIO.listen(server);

  io.sockets.on('connection', socket => {
    socket.on('document', documentId => {
      socket.join(documentId);

      documentSessions
        .newConnection(documentId)
        .then(() =>
          socket.emit('loadImage', documentSessions.getImageDataURI(documentId)));

      const sendTextDiff = text => {
        const responseText = handleText(text);
        socket.to(documentId).emit('text', responseText);
      };

      let saveImageTimeout;

      const saveImageAfterEdits = () => {
        saveImageTimeout = setTimeout(() => {
          socket.emit('saveImage');
        }, 1000);
      };

      const sendImageDiff = image => {
        clearTimeout(saveImageTimeout);
        saveImageAfterEdits();

        const responseImage = handleImage(image);
        socket.to(documentId).emit('image', responseImage);
      };

      const saveAndCleanup = () => {
        documentSessions.disconnection(documentId);
      };

      const saveImageData = imageDataURI => {
        documentSessions.saveImageDataURI(documentId, imageDataURI);
      };

      socket.on('drawing', sendImageDiff);
      socket.on('typing', sendTextDiff);
      socket.on('imageDataURI', saveImageData);
      socket.on('disconnect', saveAndCleanup);
    });
  });
};

module.exports = startSockets;
