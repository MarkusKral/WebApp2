var app = angular.module('DonationWebApp');

function aboutController($scope) {
  // create a message to display in our view
  $scope.message = 'This is the the Page, build by Markus Kral';
};

module.exports = aboutController;
