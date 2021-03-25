import { combineReducers, createStore } from 'redux';

const initialUI = {
  documentAction: 'typing'
};

const uiReducer = (state = initialUI, action) => {
  const newState = { documentAction: state.documentAction };

  switch (action.type) {
    case 'SELECT_DOCUMENT_ACTION':
      newState.documentAction = action.documentAction;
      return newState;
    default:
      return state;
  }
};

const configureStore = (preloadedState = {}) =>
  createStore(
    combineReducers({
      ui: uiReducer
    }),
    preloadedState
  );

export default configureStore;
