const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');
const socketIO = require('socket.io');
const path = require('path');
const users = require('./routes/api/users');
const session = require('./routes/api/session');
const db = process.env.PROD_MONGODB || require('./config/keys').mongoURI;

require('./config/passport')(passport);


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

// serve static frontend files
app.use(express.static(path.join(__dirname, '../client/web/dist')));

// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/web/dist', 'index.html'));
});

const port = process.env.PORT || 5000;

const server = app.listen(port, () =>
  console.log(`Server is running on port ${port}`));

const io = socketIO.listen(server);

io.sockets.on('connection', socket => {
  socket.on('working', res => {
    console.log(res);
    io.emit('greeting', 'welcome to typedraw, this was sent with a socket');
  });
});

module.exports = server;
