var app = angular.module('DonationWebApp');

//app.controller('searchController', ['$scope','$http', '$location', function($scope, $http, $location) {
function searchController($scope, $http, $location, $rootScope) {

  // create a message to display in our view
  $scope.message = 'Search Page!';
  $scope.formData = {};

  $scope.searchParam = '';


  $scope.search = function () {
    $http.get('/search/' + $scope.formData.searchParam)
      .success(function (data) {
        $rootScope.donations = data;
        $location.path('/search');

        console.log(data);
      })
      .error(function (data) {
        console.log('Error: ' + data);
        $location.path('/listAll');

      });
  };
};

module.exports = searchController;