import axios from 'axios';

export const fetchCurrentSession = token =>
  axios.get('https://www.typedraw.app/api/users/current', { headers: token });

export const startSession = user =>
  axios.post('https://www.typedraw.app/api/session/login', user);

export const endSession = () =>
  axios.get('https://www.typedraw.app/api/session/logout');
