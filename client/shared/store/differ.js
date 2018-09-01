import { RECEIVE_DOCUMENT } from '../actions/document_actions';

const differ = store => next => action => {
  switch (action.type) {
    case RECEIVE_DOCUMENT:
      console.log('differ middleware received document');
      next(action);
      break;
    default:
      next(action);
  }
};

export default differ;
