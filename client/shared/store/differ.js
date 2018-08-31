
import { UPDATE_TEXT, UPDATE_IMAGE } from '../actions/document_actions';

const calculateTextDifference = () => ({});
const calculateImageDifference = () => ({});
const sendTextDifference = () => ({});

cost differ = store => next => action => {
  switch (action.type) {
    case UPDATE_TEXT:
      break;
    case UPDATE_IMAGE:
      break;
    default:
      next(action)
  }
};

export default differ;