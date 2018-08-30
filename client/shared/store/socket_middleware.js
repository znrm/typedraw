import startSocket from '../util/socket_util';
import { TYPING } from '../actions/testing_actions';

const socket = startSocket();

const socketMiddleware = store => next => action => {
  if (action.type === TYPING) {
    socket.emit('typing', action.key);
  } else {
    next(action);
  }
};

export default socketMiddleware;
