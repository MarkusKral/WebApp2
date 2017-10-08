'use strict';
module.exports = function(app) {
  var cookbook = require('../logic/cookbook.js');
  var passport = require('passport');


  function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
      return next();

    // if they aren't redirect them to the home page
    res.redirect('/login');
  }

  // cookbook Routes
  app.route('/receipe')
    .get(isLoggedIn, cookbook.list_all_receipe)
    .post(isLoggedIn,cookbook.create_a_receipe);

  // cookbook Routes for special receipe
  app.route('/receipe/:receipeID')
    .get(isLoggedIn, cookbook.getReceipebyID)
    .post(isLoggedIn,cookbook.getProfile);

  app.get('/receipe/:userId/books/:bookId', function (req, res) {
    res.send(req.params)
  })



  app.post('/create', passport.authenticate('local-signup', {
    successRedirect : '/create', // redirect to the secure profile section
    failureRedirect : '/signup', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
  }));

  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect : '/profile', // redirect to the secure profile section
    failureRedirect : '/signup', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
  }));



  app.post('/login', passport.authenticate('local-login', {
    successRedirect : '/profile', // redirect to the secure profile section
    failureRedirect : '/login', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
  }));

  app.route('/profile')
    .get(isLoggedIn, cookbook.getProfile)





};
