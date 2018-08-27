const express = require('express');
const mongoose = require('mongoose');
const db = process.env.PROD_MONGODB || require('./config/keys').mongoURI;
const bodyParser = require('body-parser');

const users = require('./routes/api/users');

mongoose
  .connect(encodeURI(db), { useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB successfully'))
  .catch(err => console.log(err));


const app = express();

// middleware for body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes
app.use('/api/users', users);

app.get('/', (req, res) => res.send('Hello, TypeDraw!'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
