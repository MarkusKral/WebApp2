var app = angular.module('DonationWebApp');

app.controller('aboutController',['$scope', require('./aboutcontroller')]);
app.controller('mainController',['$scope', require('./maincontroller')]);
app.controller('donateController', ['$scope', '$location', '$http', '$rootScope', require('./donatecontroller')]);
app.controller('donationsController',['$scope', '$http', '$location', require('./donationscontroller')]);
app.controller('contactController', ['$scope', require('./contactcontroller')]);
app.controller('loginController', ['$scope', '$location', '$http', require('./logincontroller')]);
app.controller('viewReceipeController', ['$scope', '$http', '$location', '$rootScope', require('./viewreceipe')]);
app.controller('searchController', ['$scope','$http', '$location', require('./searchcontroller')]);
app.controller('signupController', ['$scope', '$location', '$http', require('./signupcontroller')]);
//app.controller('signupController', ['$scope', require('signupcontroller')]);



