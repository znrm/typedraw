import { merge } from 'lodash';
import { SELECT_DOCUMENT_ACTION, SELECT_DOCUMENT } from '../actions/ui_actions';

const initialUI = {
  documentAction: 'typing',
  selectedDocument: 0
};

const uiReducer = (state = initialUI, action) => {
  Object.freeze(state);
  const newState = merge({}, state);

  switch (action.type) {
    case SELECT_DOCUMENT_ACTION:
      newState.documentAction = action.documentAction;
      return newState;
    case SELECT_DOCUMENT:
      newState.selectedDocument = action.documentId;
      return newState;
    default:
      return state;
  }
};

export default uiReducer;
