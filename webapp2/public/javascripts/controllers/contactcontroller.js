var app = angular.module('DonationWebApp');

function contactController($scope) {
  // create a message to display in our view
  $scope.message = 'This is the contact Page';
};

module.exports = contactController;