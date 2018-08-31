import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import socket from './socket';
import differ from './differ';
import RootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState = {}) => (
  createStore(
    RootReducer,
    preloadedState,
    applyMiddleware(
      thunk,
      differ,
      socket,
      logger,
    )
  )
);

export default configureStore;
