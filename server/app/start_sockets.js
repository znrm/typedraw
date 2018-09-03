const socketIO = require('socket.io');
const handleText = require('./handle_text');
const handleImage = require('./handle_image');

const startSockets = server => {
  const io = socketIO.listen(server);

  io.sockets.on('connection', socket => {
    socket.on('document', documentId => {
      socket.join(documentId);

      socket.on('drawing', image => {
        const responseImage = handleImage(image);

        socket.to(documentId).emit('image', responseImage);
      });

      socket.on('typing', text => {
        const responseText = handleText(text);
        io.in(documentId).emit('text', responseText);
        // socket.to(documentId).emit('text', responseText);
      });
    });
  });
};

module.exports = startSockets;
