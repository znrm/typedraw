import { merge } from 'lodash';
import { SELECT_DOCUMENT_ACTION, SELECT_DOCUMENT, TOGGLE, SELECT_COLOR } from '../actions/ui_actions';

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
  // added stubs for erase toggle and select color
  switch (action.type) {
    case SELECT_DOCUMENT_ACTION:
      newState.documentAction = action.documentAction;
      return newState;
    case SELECT_DOCUMENT:
      newState.selectedDocument = action.documentId;
      return newState;
    case TOGGLE:
      newState[action.uiElement] = !newState[action.uiElement];
      return newState;
    case SELECT_COLOR:
      newState.color = action.color;
      return newState;
    default:
      return state;
  }
};

export default uiReducer;
