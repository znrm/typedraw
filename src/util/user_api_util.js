import axios from 'axios';

export const createUser = ({ email, password }) =>
  axios.post('https://www.typedraw.app/api/users/register', {
    email,
    password
  });

export const dummmy = 'dummy so linter will ctfo';
