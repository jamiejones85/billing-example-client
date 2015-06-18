'use strict';

describe('billController successfully contacting external server', function (){
    var scope, $httpBackend;//we'll use these in our tests

     //mock Application to allow us to inject our own dependencies
     beforeEach(angular.mock.module('app'));
     //mock the controller for the same reason and include $rootScope and $controller
     beforeEach(angular.mock.inject(function($rootScope, $controller, _$httpBackend_){
         $httpBackend = _$httpBackend_;
         $httpBackend.when('GET', 'http://localhost:8008/').respond({
          "statement": {
            "generated": "2015-01-11",
            "due": "2015-01-25",
            "period": {
              "from": "2015-01-26",
              "to": "2015-02-25"
            }
          },
          "total": 102.76,
          "package": {
            "subscriptions": [
              { "type": "tv", "name": "Variety with Movies HD", "cost": 50.00 },
              { "type": "talk", "name": "Sky Talk Anytime", "cost": 5.00 },
              { "type": "broadband", "name": "Fibre Unlimited", "cost": 16.40 }
            ],
            "total": 71.40
          },
          "callCharges": {
            "calls": [
              { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 },
              { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 },
              { "called": "07716393769", "duration": "00:23:03", "cost": 2.13 }
            ],
            "total": 6.39
          },
          "skyStore": {
            "rentals": [
              { "title": "50 Shades of Grey", "cost": 4.99 }
            ],
            "buyAndKeep": [
              { "title": "That\'s what she said", "cost": 9.99 },
              { "title": "Broke back mountain", "cost": 9.99 }
            ],
            "total": 24.97
          }
        });

         //create an empty scope
         scope = $rootScope.$new();
         //declare the controller and inject our empty scope
         $controller('billController', {$scope: scope});
     }));

     // tests start here
     it('should fetch bill', function(){
         $httpBackend.flush();
         expect(scope.bill.callCharges.calls.length).toBe(3);
         expect(scope.bill.total).toBe(102.76);
     });
});


describe('billController failing to contacting external server', function (){
    var scope, $httpBackend;//we'll use these in our tests

     //mock Application to allow us to inject our own dependencies
     beforeEach(angular.mock.module('app'));
     //mock the controller for the same reason and include $rootScope and $controller
     beforeEach(angular.mock.inject(function($rootScope, $controller, _$httpBackend_){
         $httpBackend = _$httpBackend_;
         $httpBackend.when('GET', 'http://localhost:8008/').respond(500, "Server Error");

         //create an empty scope
         scope = $rootScope.$new();
         //declare the controller and inject our empty scope
         $controller('billController', {$scope: scope});
     }));

     // tests start here
     it('should fetch bill', function(){
         $httpBackend.flush();
         expect(scope.error.msg).toBe("Error Retrieving Bill from Sky.");
     });
});
