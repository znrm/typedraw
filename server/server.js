const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');
const path = require('path');
const startSockets = require('./app/start_sockets');
const users = require('./routes/api/users');
const session = require('./routes/api/session');
const documents = require('./routes/api/documents');
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

startSockets(server);
