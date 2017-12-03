var app = angular.module('DonationWebApp');

app.controller('searchController', ['$scope','$http', '$location', function($scope, $http, $location) {
    // create a message to display in our view
    $scope.message = 'Search Page!';
    $scope.formData = {};

    $scope.searchParam = '';


  $scope.search = function () {
    $http.post('/search', $scope.formData)
      .success(function (data) {
        $scope.donations = data;
        //q$location.path('/donations');
        console.log(data);
      })
      .error(function (data) {
        console.log('Error: ' + data);
        $location.path('/donations');

      });
  };


  }
  ]);
