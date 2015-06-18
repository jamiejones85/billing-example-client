(function() {
  var module;

  module = angular.module('app.billing.controllers', []);

  module.controller('billController', function($scope, $http) {
    return $http.get('http://localhost:8008/').success(function(data) {
      return $scope.bill = data;
    }).error(function(data) {
      return $scope.error = data;
    });
  });

}).call(this);

(function() {
  var module;

  module = angular.module('app', ['app.routing', 'ui.bootstrap']);

}).call(this);

(function() {
  var module;

  module = angular.module('app.routing', ['app.billing.controllers', 'ngRoute']);

  module.config(function($routeProvider) {
    return $routeProvider.when('/', {
      templateUrl: 'templates/bill.html',
      controller: 'billController'
    }).otherwise({
      redirect: '/'
    });
  });

}).call(this);
