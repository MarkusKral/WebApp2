var app = angular.module('DonationWebApp');

app.controller('signupController', ['$scope', '$location', '$http', function($scope, $location, $http) {

  $scope.formData = {};
  $scope.formData.user = '';
  $scope.formData.password = '';


  //Reset our formData fields

  $scope.signup = function(){
    $http.post('/signup', $scope.formData)
      .success(function(data) {
        $scope.donations = data;
        $location.path('/login');
        console.log(data);
      })
      .error(function(data) {
        console.log('Error: ' + data);
        $location.path('/signup');
      });
  };
}

]);
