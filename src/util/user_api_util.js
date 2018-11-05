import axios from 'axios';
import HOST from './host';

export const createUser = ({ email, password }) =>
  axios.post(`${HOST}/api/users/register`, {
    email,
    password
  });

export const dummmy = 'dummy so linter will ctfo';
