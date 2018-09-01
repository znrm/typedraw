import { merge } from 'lodash';
import { SELECT_DOCUMENT_ACTION, SELECT_DOCUMENT, ERASE_TOGGLE, SELECT_COLOR } from '../actions/ui_actions';

const initialUI = {
  documentAction: 'typing',
  selectedDocument: 0,
  erasing: false,
  color: '#000000'
};

// reducer for erasor and color fix blah blah

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
    case ERASE_TOGGLE:
      return 'blah';
    case SELECT_COLOR:
      return 'blahblah';
    default:
      return state;
  }
};

export default uiReducer;
