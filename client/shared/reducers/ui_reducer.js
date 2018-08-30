import { merge } from 'lodash';
import { SELECT_DOCUMENT_ACTION } from '../actions/ui_actions';

const initialUI = {
  documentAction: 'typing'
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
