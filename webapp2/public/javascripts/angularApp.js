require('angular');
require('angular-route');
require('../../node_modules/bootstrap/dist/css/bootstrap.css' );
require('../../node_modules/font-awesome/css/font-awesome.css' );
require('../stylesheets/style.css');
var app = angular.module('DonationWebApp', ['ngRoute']);
require('./controllers/index');


app.config(['$routeProvider', function($routeProvider) {  //HERE
//app.config(function ($routeProvider) {
  $routeProvider
  // route for the home page
    .when('/', {
      templateUrl: 'public/pages/home.ejs',
      controller: 'mainController'
    })
    // route for the donate page
    .when('/createOrUpdate', {
      templateUrl: 'public/pages/createOrUpdate.ejs',
      controller: 'createOrUpdateController'
    })
    // route for the donations page
    .when('/listAll', {
      templateUrl: 'public/pages/listAllReceipes.ejs',
      controller: 'listAllReceipesController'
    })
    // route for the about page
    .when('/about', {
      templateUrl: 'public/pages/about.ejs',
      controller: 'aboutController'
    })
    // route for the contact page
    .when('/contact', {
      templateUrl: 'public/pages/contact.ejs',
      controller: 'contactController'
    })
    .when('/login', {
      templateUrl: 'public/pages/login.ejs',
      controller: 'contactController'
    })
    .when('/viewReceipe', {
      templateUrl: 'public/pages/receipe.ejs',
      controller: 'viewReceipeController'
    })
    .when('/search', {
      templateUrl: 'public/pages/search.ejs',
      controller: 'searchController'
    })
    .when('/login', {
      templateUrl: 'public/pages/login.ejs',
      controller: 'loginController'
    })
    .when('/signUp', {
      templateUrl: 'public/pages/signup.ejs',
      controller: 'signupController'
    })
    .when('/newest', {
      templateUrl: 'public/pages/latest.ejs',
      controller: 'latestController'
    });
//});
}]);
