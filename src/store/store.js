import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import RootReducer from '../reducers/root_reducer';

const middleware = [thunk];

if (process.env.NODE_ENV !== 'production') {
  middleware.push(logger);
}

const configureStore = (preloadedState = {}) =>
  createStore(RootReducer, preloadedState, applyMiddleware(...middleware));

export default configureStore;
