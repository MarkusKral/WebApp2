var app = angular.module('DonationWebApp');

//app.controller('listAllReceipesController', ['$scope','$http', '$location', function($scope, $http, $location) {
function latestController($scope, $http, $location) {

  // create a message to display in our view
  $scope.message = 'Receipes Page!';

  $http.get('/newest')
    .success(function (data) {
      $scope.donations = data;
      console.log(data);
    })
    .error(function (data) {
      console.log('Error: ' + data);
    });


};

module.exports = latestController;