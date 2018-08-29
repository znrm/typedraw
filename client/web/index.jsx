import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from '../shared/store/store';
import Root from './components/root';
import { fetchCurrentSession } from '../shared/actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  console.log('webpack is working');

  const store = configureStore();
  const root = document.getElementById('root');

  if (sessionStorage.token) {
    const token = { Authorization: sessionStorage.getItem('token') };
    fetchCurrentSession(token)(store.dispatch);
  }

  ReactDOM.render(<Root store={store} />, root);
});
