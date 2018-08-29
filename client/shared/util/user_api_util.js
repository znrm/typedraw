const axios = require('axios');

export const createUser = ({ email, password }) =>
  axios.post('https://typedraw.herokuapp.com/api/users/register', {
    email,
    password
  });

export const dummmy = 'dummy so linter will ctfo';
