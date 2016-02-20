'use strict';

/**
 * @ngdoc overview
 * @name currencyConverterApp
 * @description
 * # currencyConverterApp
 *
 * Main module of the application.
 */
angular
    .module('currencyConverterApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
        .controller('ConvertCtrl', ['$scope', '$http', function($scope, $http) {
        $scope.rates = {};
        $http.get('http://api.fixer.io/latest?base=ZAR')
            .then(function(res) {
                $scope.rates = res.data.rates;
                $scope.toType = $scope.rates.USD;
                $scope.fromType = $scope.rates.EUR;
                $scope.fromValue = 1;
                $scope.currencyConvert();
            });
        $scope.currencyConvert = function() {
            $scope.toValue = $scope.fromValue * ($scope.toType * (1 / $scope.fromType));
            $scope.toValue = $scope.toValue;
        };
    }])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .otherwise({
                redirectTo: '/'
            });
    });


