import startSocket from '../util/socket_util';
import { RECEIVE_NEW_KEYS } from '../actions/document_actions';

const socket = startSocket();

const socketMiddleware = store => next => action => {
  if (action.type === RECEIVE_NEW_KEYS) {
    socket.emit('typing', action.key);
  } else {
    next(action);
  }
};

export default socketMiddleware;
