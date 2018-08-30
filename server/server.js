const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');

require('./config/passport')(passport);
const db = process.env.PROD_MONGODB || require('./config/keys').mongoURI;
const users = require('./routes/api/users');
const session = require('./routes/api/session');
const documents = require('./routes/api/documents');

mongoose
  .connect(
    encodeURI(db),
    { useNewUrlParser: true }
  )
  .then(() => console.log('Connected to MongoDB successfully'))
  .catch(err => console.log(err));

const app = express();

// temporary:
app.use(cors());

// middleware

// middleware for body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());

// routes
app.use('/api/users', users);
app.use('/api/session', session);
app.use('/api/documents', documents);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
