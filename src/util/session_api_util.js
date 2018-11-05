import axios from 'axios';
import HOST from './host';

export const fetchCurrentSession = token =>
  axios.get(`${HOST}/api/users/current`, { headers: token });

export const startSession = user =>
  axios.post(`${HOST}/api/session/login`, user);

export const endSession = () => axios.get(`${HOST}/api/session/logout`);
