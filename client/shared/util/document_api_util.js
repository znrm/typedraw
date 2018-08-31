const axios = require('axios');

export const updateText = document =>
  axios.patch('https://typedraw.herokuapp.com/api/documentTBD/login', document);

export const updateImage = image =>
  axios.patch('https://typedraw.herokuapp.com/api/documentTBD/login', image);
