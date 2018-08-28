const axios = require('axios');

export const createUser = ({ email, password }) => (
  axios.post('http://localhost:5000/api/users/register', {
    email,
    password
  })
);