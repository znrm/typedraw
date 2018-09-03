import { merge } from 'lodash';
import {
  RECEIVE_DOCUMENT,
  RECEIVE_DOCUMENT_DIFFS,
  REMOVE_DOCUMENT
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
    id: 0,
    textLayer: 'hi',
    imageLayer: [],
    title: 'Document Zero',
    owner: 'guest@guest.com'
  },
  1: {
    id: 1,
    textLayer: 'Hello',
    imageLayer: [],
    title: 'Greetings',
    owner: 'guest@guest.com'
  },
  2: {
    id: 2,
    textLayer: 'Started something',
    imageLayer: [],
    title: 'Snappy Title',
    owner: 'guest@guest.com'
  },
  3: {
    id: 3,
    textLayer: 'Started something part 2',
    imageLayer: [],
    title: 'Cool Drawings yet to come',
    owner: 'guest@guest.com'
  },
  4: {
    id: 4,
    textLayer: 'Started something part 3',
    imageLayer: [],
    title: 'Group Collab 3',
    owner: 'guest@guest.com'
  },
  5: {
    id: 5,
    textLayer: 'Started something part 4',
    imageLayer: [],
    title: 'Project 2',
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
    case RECEIVE_DOCUMENT_DIFFS: {
      const previousDocument = newState[action.document.id];
      const newDocument = combineDocumentWithDiffs(
        previousDocument,
        action.documentDiffs
      );
      merge(previousDocument, newDocument);
      return newState;
    }
    case REMOVE_DOCUMENT:
      delete newState[action.documentId];
      return newState;

    default:
      return state;
  }
};

export default DocumentReducer;
