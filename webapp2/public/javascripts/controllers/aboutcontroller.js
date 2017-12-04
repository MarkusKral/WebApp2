var app = angular.module('DonationWebApp');

function aboutController($scope) {
  // create a message to display in our view
  $scope.message = 'This is the about Page';
};

module.exports = aboutController;
