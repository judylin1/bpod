var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'BPOD' });
});

router.get('/parks', function(req, res, next) {
  res.render('bpod/parks');
});

router.get('/about', function(req, res, next) {
  res.render('bpod/about');
});

router.get('/contact', function(req, res, next) {
  res.render('bpod/contact');
});

router.get('/signup', function(req, res, next) {
  res.render('bpod/signup');
});

router.get('/login', function(req, res, next) {
  res.render('bpod/login');
});

module.exports = router;
