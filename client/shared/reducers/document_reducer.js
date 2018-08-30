import { merge } from 'lodash';

import {
  UPDATE_TEXT,
  UPDATE_IMAGE
} from '../actions/document_actions';

const DocumentReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const newState = merge({}, oldState);

  switch (action.type) {
    case UPDATE_TEXT:
      return merge(oldState, newState, action.document);
    case UPDATE_IMAGE:
      return merge(oldState, newState, action.image);
    default:
      return oldState;
  }
};

export default DocumentReducer;
