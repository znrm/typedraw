import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from '../shared/store/store';
import Root from './components/root';
import { fetchCurrentSession } from '../shared/actions/session_actions';

const axios = require('axios');

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');

  window.axios = axios;

  if (sessionStorage.token) {
    const token = { Authorization: sessionStorage.getItem('token') };
    fetchCurrentSession(token)(store.dispatch);
  }

  ReactDOM.render(<Root store={store} />, root);
});
