module = angular.module 'app.billing.controllers', [
]

module.controller 'billController', ($scope, $http) ->

    $http.get('http://localhost:8008/')
    .success (data) ->
        $scope.bill = data
    .error ->
        $scope.error =
            type: 'danger'
            msg: 'Error Retrieving Bill from Sky.'
