import io from 'socket.io-client';

const startSocket = () => io('https://typedraw.herokuapp.com/');

export default startSocket;
