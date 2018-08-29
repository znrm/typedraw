import io from 'socket.io-client';

const socket = io();

socket.emit('working', 'Client is able to emit with socket');
socket.on('greeting', res => console.log(res));

export default socket;
