import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store';
import Root from './components/root';

import { fetchCurrentSession } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
    console.log('webpack is working');

    const store = configureStore();
    const root = document.getElementById('root');
    fetchCurrentSession()(store.dispatch);

    window.store = store;
    window.state = () => store.getState();
    window.test = 'Window assignment is working';


    ReactDOM.render(<h1>TEST</h1>, root)
});