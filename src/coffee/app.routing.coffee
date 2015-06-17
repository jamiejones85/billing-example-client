module = angular.module 'app.routing', [
    'app.billing.controllers'
    'ngRoute'
]

# our one and only route
module.config ($routeProvider) ->

    $routeProvider.when('/',
        templateUrl: 'templates/bill.html',
        controller: 'billController'
    ).otherwise(
        redirect: '/'
    )
