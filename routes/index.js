var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Common Hardware' });
});

/* GET library page. */
router.get('/library', function(req, res, next) {
  res.render('library', { title: 'Common Hardware | Library' });
});

/* GET Slack page. */
router.get('/slack', function(req, res, next) {
  res.render('slack', { title: 'Common Hardware | Slack' });
});

module.exports = router;
