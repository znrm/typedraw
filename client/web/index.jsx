import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store';
import Root from './components/root';

import { fetchCurrentSession } from './actions/session_actions';

// TODO: remove after development
import * as Users from './actions/user_actions';
import * as Session from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  console.log('webpack is working');

  const store = configureStore();
  const root = document.getElementById('root');
  fetchCurrentSession()(store.dispatch);

  // TODO: remove after development
  window.store = store;
  window.state = () => store.getState();
  window.test = 'Window assignment is working';
  window.users = Users;
  window.session = Session;

  ReactDOM.render(<Root store={store} />, root);
});
