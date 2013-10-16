'use strict';


// Declare app level module which depends on filters, and services
angular.module('JazoonDemoApp', 
	['Centralway.lungo-angular-bridge', 'ngResource'])
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
      $routeProvider.when('/add', {templateUrl: '/partials/add.html', controller: 'AddCtrl'});
      $routeProvider.when('/todo/view/:todoId', {templateUrl: '/partials/view.html', controller: 'ViewTodoCtrl'});
    $routeProvider.otherwise({redirectTo: '/'});
    $locationProvider.html5Mode(true);
  }])
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.headers.common = { 'Accept': 'application/json'};
    $httpProvider.defaults.headers.get  = { 'Accept': 'application/json' };
    $httpProvider.defaults.headers.post = { 'Accept': 'application/json' };
    $httpProvider.defaults.headers.options = { 'Accept': 'application/json' };
  }])
;  
