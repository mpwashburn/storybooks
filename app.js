const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

const app = express();

// Load User Model
require('./models/User');

// Passport config
require('./config/passport')(passport);

// Load Routes
const auth = require('./routes/auth');

// Load keys
const keys = require('./config/keys');

// Map global promises
mongoose.Promise = global.Promise;
// Mongoose Connect

mongoose.connect(keys.mongoURI, {
  useMongoClient:true
})
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Routes
app.get('/', (req, res) => {
  res.send('You made to the root page');
});

// Use Routes
app.use('/auth', auth);

app.use(cookieParser);
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
}));

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
});
