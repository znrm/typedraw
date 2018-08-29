import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from '../shared/store/store';
import Root from './components/root';

import * as Session from '../shared/actions/session_actions';

// TODO: remove after development
import * as Users from '../shared/actions/user_actions';
import socket from '../shared/util/socket_util';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');

  // const { fetchCurrentSession } = Session;
  // fetchCurrentSession()(store.dispatch);

  // TODO: remove after development
  console.log('webpack is working');
  window.store = store;
  window.state = () => store.getState();
  window.test = 'Window assignment is working';
  window.users = Users;
  window.session = Session;
  window.socket = socket;

  ReactDOM.render(<Root store={store} />, root);
});
