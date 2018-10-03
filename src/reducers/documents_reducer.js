import merge from 'lodash.merge';
import { START_SESSION } from '../actions/session_actions';
import {
  RECEIVE_DOCUMENT,
  REMOVE_DOCUMENT
} from '../actions/document_actions';

const initialState = {
  0: {
    id: 0,
    textLayer: 'This is just a default document!',
    imageLayer: [],
    title: 'Default Doc',
    owner: 'guest@guest.com'
  }
};

const DocumentReducer = (state = initialState, action) => {
  Object.freeze(state);
  const newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_DOCUMENT: {
      return merge(newState, { [action.document.id]: action.document });
    }
    case START_SESSION:
      return merge(newState, action.res.data.documents);
    case REMOVE_DOCUMENT:
      delete newState[action.documentId];
      return newState;

    default:
      return state;
  }
};

export default DocumentReducer;
