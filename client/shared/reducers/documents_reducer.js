import { merge } from 'lodash';
import {
  RECEIVE_DOCUMENT,
  RECEIVE_DOCUMENT_DIFFS
} from '../actions/document_actions';

// This has not been implemented yet
// At the moment, it is just returning previousDocument and
// console logging changes that have been sent from the server
const combineDocumentWithDiffs = (previousDocument, documentDiffs) => {
  console.log(documentDiffs);
  return previousDocument;
};

const initialState = {
  0: {
    textLayer: 'hi',
    imageLayer: []
  }
};

const DocumentReducer = (state = initialState, action) => {
  Object.freeze(state);
  const newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_DOCUMENT: {
      return merge(newState, { [action.document.id]: action.document });
    }
    case RECEIVE_DOCUMENT_DIFFS: {
      const previousDocument = newState[action.document.id];
      const newDocument = combineDocumentWithDiffs(previousDocument, action.documentDiffs);
      merge(previousDocument, newDocument);
      return newState;
    }
    default:
      return state;
  }
};

export default DocumentReducer;
