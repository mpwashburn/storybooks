const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');

const app = express();

// Passport config
require('./config/passport')(passport);

// Load Routes
const auth = require('./routes/auth');
// Routes
app.get('/', (req, res) => {
  res.send('You made to the root page');
});

// Use Routes
app.use('/auth', auth);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
});
