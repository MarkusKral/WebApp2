var app = angular.module('DonationWebApp');

//app.controller('loginController', ['$scope', '$location', '$http', function ($scope, $location, $http) {
function loginController($scope, $location, $http) {

  $scope.formData = {};
  $scope.formData.user = '';
  $scope.formData.password = '';



  $scope.login = function () {
    $http.post('/login', $scope.formData)
      .success(function (data) {
        $scope.donations = data;
        $location.path('/listAll');
        console.log(data);
      })
      .error(function (data) {
        console.log('Error: ' + data);
        $location.path('/login');
      });
  };
};

module.exports = loginController;
