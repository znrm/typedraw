import { merge } from 'lodash';
import { SELECT_DOCUMENT_ACTION, selectDocument } from '../actions/ui_actions';

const initialUI = {
  documentAction: 'typing',
  selectDocument: 0
};

const uiReducer = (state = initialUI, action) => {
  Object.freeze(state);
  const newState = merge({}, state);

  switch (action.type) {
    case SELECT_DOCUMENT_ACTION:
      newState.documentAction = action.documentAction;
      return newState;
    default:
      return state;
  }
};

export default uiReducer;
