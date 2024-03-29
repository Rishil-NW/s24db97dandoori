var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Robots', { title: 'Search results for Robots'});
});

module.exports = router;