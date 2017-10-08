'use strict';
module.exports = function(app) {
  var todoList = require('../logic/cookbook.js');
  //var auth = require('../auth/login.js');

  //var auth = require('../auth/login.js');
  var passport = require('passport')

  function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
      return next();

    // if they aren't redirect them to the home page
    res.redirect('/login');
  }

  // todoList Routes
  app.route('/')
    .get(isLoggedIn, todoList.list_all_receipe)
    .post(todoList.create_a_receipe, isLoggedIn);

  app.post('/create', passport.authenticate('local-signup', {
    successRedirect : '/create', // redirect to the secure profile section
    failureRedirect : '/signup', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
  }));


  // app.route('/tasks/:taskId')
  //   .get(todoList.read_a_task)
  //   .put(todoList.update_a_task)
  //   .delete(todoList.delete_a_task);
/*
  app.route('/create_user')
      .post(auth.create_user);

  app.route('/login')
      .post(auth.login)*/

  // app.post('/login',
  //   passport.authenticate('local', { failureRedirect: '/login' }),
  //   function(req, res) {
  //     res.redirect('/');
  //   });  // app.post('/login',
  //   passport.authenticate('local', { failureRedirect: '/login' }),
  //   function(req, res) {
  //     res.redirect('/');
  //   });
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

  app.get('/profile',
    passport.authenticate('cookie', { session: false }),
    function (req, res) {
      res.json(req.user);
    });


//  app.route('/login')
//      .post(auth.login);
};
