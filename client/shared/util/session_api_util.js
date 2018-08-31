const axios = require('axios');

export const fetchCurrentSession = token =>
  axios.get('https://typedraw.herokuapp.com/api/users/current', { headers: token });

export const startSession = user =>
  axios.post('https://typedraw.herokuapp.com/api/session/login', user);

export const endSession = () =>
  axios.get('https://typedraw.herokuapp.com/api/session/logout');
