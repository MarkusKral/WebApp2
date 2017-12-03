var app = angular.module('DonationWebApp', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
  // route for the home page
    .when('/', {
      templateUrl: 'pages/home.ejs',
      controller: 'mainController'
    })
    // route for the donate page
    .when('/donate', {
      templateUrl: 'pages/donate.ejs',
      controller: 'donateController'
    })
    // route for the donations page
    .when('/donations', {
      templateUrl: 'pages/donations.ejs',
      controller: 'donationsController'
    })
    // route for the about page
    .when('/about', {
      templateUrl: 'pages/about.ejs',
      controller: 'aboutController'
    })
    // route for the contact page
    .when('/contact', {
      templateUrl: 'pages/contact.ejs',
      controller: 'contactController'
    })
    .when('/login', {
      templateUrl: 'pages/login.ejs',
      controller: 'contactController'
    })
    .when('/viewReceipe', {
      templateUrl: 'pages/receipe.ejs',
      controller: 'viewReceipeController'
    })
    .when('/search', {
      templateUrl: 'pages/search.ejs',
      controller: 'searchController'
    })
    .when('/login', {
      templateUrl: 'pages/login.ejs',
      controller: 'loginController'
    })
    .when('/signUp', {
      templateUrl: 'pages/signup.ejs',
      controller: 'signupController'
    });
});

