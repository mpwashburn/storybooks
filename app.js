const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Routes
app.get('/', (req, res) => {
  res.send('You made to the root page');
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
});
