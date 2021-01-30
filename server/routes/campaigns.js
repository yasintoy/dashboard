const express = require('express');
const router = express.Router();

const campaigns = require('../mock-data/campaigns.json');


router.get('/', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.send(campaigns);
});

module.exports = router;
