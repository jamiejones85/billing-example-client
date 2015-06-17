(function() {
  var module;

  module = angular.module('app.billing.controllers', []);

  module.controller('billController', function($scope) {
    $scope.bill = JSON.parse('{ "statement": { "generated": "2015-01-11", "due": "2015-01-25", "period": { "from": "2015-01-26", "to": "2015-02-25" } }, "total": 136.03, "package": { "subscriptions": [ { "type": "tv", "name": "Variety with Movies HD", "cost": 50.00 }, { "type": "talk", "name": "Sky Talk Anytime", "cost": 5.00 }, { "type": "broadband", "name": "Fibre Unlimited", "cost": 16.40 } ], "total": 71.40 }, "callCharges": { "calls": [ { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 }, { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 }, { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 }, { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 }, { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 }, { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 }, { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 }, { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 }, { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 }, { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 }, { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 }, { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 }, { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 }, { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 }, { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 }, { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 }, { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 }, { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 }, { "called": "02074351359", "duration": "00:23:03", "cost": 2.13 }, { "called": "02074351359", "duration": "00:23:03", "cost": 2.13 }, { "called": "02074351359", "duration": "00:23:03", "cost": 2.13 }, { "called": "02074351359", "duration": "00:23:03", "cost": 2.13 }, { "called": "02074351359", "duration": "00:23:03", "cost": 2.13 }, { "called": "02074351359", "duration": "00:23:03", "cost": 2.13 }, { "called": "02074351359", "duration": "00:23:03", "cost": 2.13 }, { "called": "02074351359", "duration": "00:23:03", "cost": 2.13 }, { "called": "02074351359", "duration": "00:23:03", "cost": 2.13 }, { "called": "02074351359", "duration": "00:23:03", "cost": 2.13 } ], "total": 59.64 }, "skyStore": { "rentals": [ { "title": "50 Shades of Grey", "cost": 4.99 } ], "buyAndKeep": [ { "title": "That\'s what she said", "cost": 9.99 }, { "title": "Broke back mountain", "cost": 9.99 } ], "total": 24.97 } }');
    $scope.subsGrid = {
      data: $scope.bill["package"].subscriptions
    };
    $scope.callsGrid = {
      enableFiltering: true,
      data: $scope.bill.callCharges.calls
    };
    $scope.rentalsGrid = {
      enableFiltering: $scope.bill.skyStore.rentals > 5,
      data: $scope.bill.skyStore.rentals
    };
    return $scope.ownGrid = {
      enableFiltering: $scope.bill.skyStore.buyAndKeep > 5,
      data: $scope.bill.skyStore.buyAndKeep
    };
  });

}).call(this);

(function() {
  var module;

  module = angular.module('app', ['app.routing', 'ui.grid', 'ui.bootstrap']);

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
