var app = angular.module('DonationWebApp');

app.controller('donationsController', ['$scope','$http', '$location', function($scope, $http, $location) {
    // create a message to display in our view
    $scope.message = 'Receipes Page!';
    
    $http.get('/receipe')
        .success(function(data) {
            $scope.donations = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    $scope.incrementUpvotes = function(id){
          $http.put('/donations/' + id + '/votes')
            .success(function(data) {
                $scope.donations = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
          };

    $scope.viewReceipe = function(id){
      $http.get('/receipe/'+id)
        .success(function(data) {
          $scope.donations = data;
          // window.location.href = "#/viewReceipe"
          location.path('/viewReceipe');
          console.log(data);
        })
        .error(function(data) {
          console.log('Error: ' + data);
        });
    };


    $scope.delete = function(id) {
      // if (confirm("Are you sure you want to delete?")) {
      //         console.log('Deleting id : ' + id);
        $http.delete('/donations/' + id)
            .success(function(data) {
                $scope.donations = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
         // }
    };

  }
  ]);
