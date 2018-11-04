const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');
const path = require('path');
const startSockets = require('./services/start_sockets');
const users = require('./routes/api/users');
const session = require('./routes/api/session');
const documents = require('./routes/api/documents');
const mongoURI = process.env.PROD_MONGODB
  ? process.env.PROD_MONGODB
  : require('./config/keys').mongoURI;

const startServer = () => {
  const app = express();

  // temporary
  app.use(cors());

  // middleware
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(passport.initialize());

  // serve static frontend files
  app.use(express.static(path.join(__dirname, '../public')));

  app.get('/canvas/:documentId', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'canvas', 'canvas.html'));
  });

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
  });

  // routes
  app.use('/api/users', users);
  app.use('/api/session', session);
  app.use('/api/documents', documents);

  const port = process.env.PORT || 5000;
  const server = app.listen(port, () => console.log(`Running on port ${port}`));

  return server;
};

mongoose
  .connect(
    encodeURI(mongoURI),
    { useNewUrlParser: true }
  )
  .then(startServer, console.error)
  .then(startSockets, console.error)
  .then(
    () => {
      console.log('Successfully connected to DB and running sockets');
    },
    () => console.error('Unable to successfully start server')
  );
