var app = angular.module('DonationWebApp');

function contactController($scope) {
  // create a message to display in our view
  $scope.message = 'This is the contact Page of Markus Kral (markus.kral@goglemail.com)';
};

module.exports = contactController;