import { merge } from 'lodash';

import {
  UPDATE_TEXT,
  UPDATE_IMAGE,
  RECEIVE_NEW_KEYS
} from '../actions/document_actions';

const DocumentReducer = (oldState = { 0: { textLayer: '' } }, action) => {
  Object.freeze(oldState);
  const newState = merge({}, oldState);

  switch (action.type) {
    case UPDATE_TEXT:
      return merge(oldState, newState, action.document);
    case UPDATE_IMAGE:
      return merge(oldState, newState, action.image);
    case RECEIVE_NEW_KEYS:
      newState[action.docId].textLayer += action.keys;
      return newState;
    default:
      return oldState;
  }
};

export default DocumentReducer;
