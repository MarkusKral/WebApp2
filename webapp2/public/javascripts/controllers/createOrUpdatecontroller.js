var app = angular.module('DonationWebApp');

//app.controller('createOrUpdateController', ['$scope', '$location', '$http', '$rootScope', function ($scope, $location, $http, $rootScope) {
  function createOrUpdateController($scope, $location, $http, $rootScope) {


  $scope.update = false;

  $scope.formData = {};

  $scope.name = '';
  $scope.ingredients = {};

  //Reset our formData fields
//  $scope.formData.ingredients = {salt: 3, test: 4};

  $scope.addDonation = function () {
    $http.post('/receipe', $scope.formData)
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

  $scope.viewReceipe = function (id) {
    $http.get('/receipe/' + id)
      .success(function (data) {

        $scope.donations = data;

        $location.path('/createOrUpdate');

        //window.location.href = "#/viewReceipe"

        console.log("got the viewReceipe inside the other thing");
        console.log($scope.donations);
        console.log($scope);
        console.log(data);
      })
      .error(function (data) {
        console.log('Error: ' + data);
      });
  };

  $scope.updateReceipe = function (id) {
    console.log("scope:", $scope);
    console.log($scope.formData);
    $http.patch('/receipe/' + id, $scope.formData)
      .success(function (data) {
        $scope.donations = data;

        console.log("this is the data inside the patch function");
        console.log(data);

        $location.path('/listAll');
      })
      .error(function (data) {
        console.log($scope.formData);
        console.log('Error: ' + data);
        $location.path('/listAll');

      });
  };

};
module.exports = createOrUpdateController;

//]);
