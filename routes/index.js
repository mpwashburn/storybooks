const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('It Works!');
});

router.get('/welcome', (req, res) => {
  res.render('index/welcome');
});

module.exports = router;
