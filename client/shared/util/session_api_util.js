const axios = require('axios');

export const fetchCurrentSession = token =>
  axios.get('http://typedraw.herokuapp.com/api/users/current', { headers: token });

export const startSession = user =>
  axios.post('http://typedraw.herokuapp.com/api/session/login', user);

export const endSession = () =>
  axios.get('http://typedraw.herokuapp.com/api/session/logout');
