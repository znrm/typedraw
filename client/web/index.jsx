import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from '../shared/store/store';
import Root from './components/root';
import startSocket from '../shared/util/socket_util';
import { fetchCurrentSession } from '../shared/actions/session_actions';

const axios = require('axios');

document.addEventListener('DOMContentLoaded', () => {
  const socket = startSocket();
  socket.emit('working', 'Client is able to emit with socket');
  socket.on('greeting', res => console.log(res));

  const store = configureStore();
  const root = document.getElementById('root');

  window.axios = axios;

  if (sessionStorage.token) {
    const token = { Authorization: sessionStorage.getItem('token') };
    fetchCurrentSession(token)(store.dispatch);
  }

  ReactDOM.render(<Root store={store} />, root);
});
