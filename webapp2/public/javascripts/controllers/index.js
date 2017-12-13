var app = angular.module('DonationWebApp');

app.controller('aboutController',['$scope', require('./aboutcontroller')]);
app.controller('mainController',['$scope', require('./maincontroller')]);
app.controller('createOrUpdateController', ['$scope', '$location', '$http', '$rootScope', require('./createOrUpdatecontroller')]);
app.controller('listAllReceipesController',['$scope', '$http', '$location', require('./listAllReceipescontroller')]);
app.controller('latestController',['$scope', '$http', '$location', require('./latestcontroller')]);
app.controller('contactController', ['$scope', require('./contactcontroller')]);
app.controller('loginController', ['$scope', '$location', '$http', require('./logincontroller')]);
app.controller('viewReceipeController', ['$scope', '$http', '$location', '$rootScope', require('./viewreceipe')]);
app.controller('searchController', ['$scope','$http', '$location', '$rootScope', require('./searchcontroller')]);
app.controller('signupController', ['$scope', '$location', '$http', require('./signupcontroller')]);
//app.controller('signupController', ['$scope', require('signupcontroller')]);



