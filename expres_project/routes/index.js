var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/success', function(req, res, next) {
  res.send('success');
});
router.get('/public/html/success', function(req, res, next) {
  res.render('success');
});
module.exports = router;
