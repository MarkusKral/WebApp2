var app = angular.module('DonationWebApp');

//app.controller('listAllReceipesController', ['$scope','$http', '$location', function($scope, $http, $location) {
function listAllReceipesController($scope, $http, $location) {

  // create a message to display in our view
  $scope.message = 'Receipes Page!';

  $http.get('/receipe')
    .success(function (data) {
      $scope.donations = data;
      console.log(data);
    })
    .error(function (data) {
      console.log('Error: ' + data);
    });


  $scope.viewReceipe = function (id) {
    $http.get('/receipe/' + id)
      .success(function (data) {
        $scope.donations = data;
        // window.location.href = "#/viewReceipe"
        location.path('/viewReceipe');
        console.log(data);
      })
      .error(function (data) {
        console.log('Error: ' + data);
      });
  };


};

module.exports = listAllReceipesController;