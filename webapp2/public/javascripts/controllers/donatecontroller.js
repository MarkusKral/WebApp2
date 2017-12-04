var app = angular.module('DonationWebApp');

//app.controller('donateController', ['$scope', '$location', '$http', '$rootScope', function ($scope, $location, $http, $rootScope) {
  function donateController($scope, $location, $http, $rootScope) {


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
        $location.path('/donations');
        console.log(data);
      })
      .error(function (data) {
        console.log('Error: ' + data);
        $location.path('/donations');

      });
  };

  $scope.viewReceipe = function (id) {
    $http.get('/receipe/' + id)
      .success(function (data) {
        //$location.path('/viewReceipe');
        $rootScope.update = true;
        $rootScope.donations = data;
        $scope.donations = data;

        $location.path('/donate');

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

        $location.path('/donations');
      })
      .error(function (data) {
        console.log($scope.formData);
        console.log('Error: ' + data);
        $location.path('/donations');

      });
  };

  // $scope.updateReceipe = function (id) {
  //   $http.patch('/receipe/' + id)
  //     .success(function (data) {
  //       $location.path('/donate');
  //       console.log(data);
  //     })
  //     .error(function (data) {
  //       console.log('Error: ' + data);
  //       $location.path('/donations');
  //
  //     });
  // };


};
module.exports = donateController;

//]);
