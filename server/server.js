const express = require('express');
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;

mongoose
  .connect(encodeURI(db), { useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB successfully'))
  .catch(err => console.log(err));


const app = express();

app.get('/', (req, res) => res.send('Hello, TypeDraw!'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
