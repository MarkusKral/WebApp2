var app = angular.module('DonationWebApp');

function mainController($scope) {

//app.controller('mainController', ['$scope', function($scope) {
  // create a message to display in our view
  $scope.message = 'Web Application by Markus Kral';
};

module.exports = mainController;
