var app = angular.module('DonationWebApp');

app.controller('viewReceipeController', ['$scope', '$http','$location','$rootScope', function ($scope, $http, $location, $rootScope) {
  // create a message to display in our view
  $scope.message = 'Receipe Page!';

  $scope.viewReceipe = function (id) {
    $http.get('/receipe/' + id)
      .success(function (data) {
        //$location.path('/viewReceipe');
        $rootScope.donations = data;
        $location.path('/viewReceipe');

        //window.location.href = "#/viewReceipe"

        console.log("got correct data");
        console.log($scope.donations);
        console.log($scope);
        console.log(data);
      })
      .error(function (data) {
        console.log('Error: ' + data);
      });
  };

  $scope.delete = function(id) {
    //if (confirm("Are you sure you want to delete?")) {
      console.log('Deleting id : ' + id);
      $http.delete('/receipe/' + id)
        .success(function(data) {
          $scope.donations = data;
          console.log(data);
          $location.path('/donations');
        })
        .error(function(data) {
          console.log('Error: ' + data);
          $location.path('/l');

        });
   // }
  };

  $scope.update = function(id) {
    //if (confirm("Are you sure you want to delete?")) {
    console.log('Updating id : ' + id);
    $http.patch('/receipe/' + id)
      .success(function(data) {
        $scope.donations = data;
        console.log(data);
        $location.path('/donations');
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });
    // }
  };

}
]);
