const axios = require('axios');

export const fetchCurrentSession = token =>
  axios.get('http://localhost:5000/api/users/current', { headers: token })


export const startSession = user =>
  axios.post('http://localhost:5000/api/session/login', user);

export const endSession = () =>
  axios.delete('http://localhost:5000/api/session');
