var express = require('express');
var router = express.Router();

var testUser = require('./../public/javascripts/sampleData.js')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(testUser);
});

module.exports = router;
