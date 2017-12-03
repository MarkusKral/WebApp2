var app = angular.module('DonationWebApp');

app.controller('loginController', ['$scope', '$location', '$http', function($scope, $location, $http) {

  $scope.formData = {};
  $scope.formData.user = '';
  $scope.formData.password = '';


    //Reset our formData fields

    $scope.login = function(){
       $http.post('/login', $scope.formData)
            .success(function(data) {
                $scope.donations = data;
                $location.path('/donations');
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
                $location.path('/login');
            });
            };
  }

  ]);
