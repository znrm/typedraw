import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from '../shared/store/store';
import Root from './components/root';

import fetchCurrentSession from '../shared/actions/session_actions';

// TODO: remove after development
import * as Users from '../shared/actions/user_actions';
import * as Session from '../shared/actions/session_actions';
const axios = require('axios');


document.addEventListener('DOMContentLoaded', () => {
  console.log('webpack is working');

  const store = configureStore();
  const root = document.getElementById('root');

  // const { fetchCurrentSession } = Session;
  if (sessionStorage.token) {
    const token = { Authorization: sessionStorage.getItem('token') };
    fetchCurrentSession(token)(store.dispatch);
  }

  // TODO: remove after developm            ent
  window.store = store;
  window.state = () => store.getState();
  window.test = 'Window assignment is working';
  window.users = Users;
  window.session = Session;
  window.axios = axios;

  ReactDOM.render(<Root store={store} />, root);
});
