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

router.get('/login', function(req, res, next) {
  res.render('bpod/login');
});

// route for facebook authentication and login
// different scopes while logging in
router.get('/login/facebook',
  passport.authenticate('facebook', { scope : 'email' }
));

// handle the callback after facebook has authenticated the user
router.get('/login/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect : 'bpod/profile',
    failureRedirect : '/'
  })
);

module.exports = router;
