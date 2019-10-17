const express = require('express');

const db = require('../data/dbConfig.js');
const Resources = require('./resource-model.js');

const router = express.Router();

router.get('/', (req, res) => {
  Resources.find()
  .then(resource => {
    res.json(resource);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get resources' });
  });
});


module.exports = router;