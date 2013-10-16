'use strict';


// Declare app level module which depends on filters, and services
angular.module('JazoonDemoApp', 
	['Centralway.lungo-angular-bridge']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/dynamic', {templateUrl: "partials/dynamic.html", controller: "DynamicCtrl"});
    $routeProvider.when('/deeplink/view/:msg', {templateUrl: "partials/deeplink.html", controller: "DeeplinkCtrl"});
    $routeProvider.when('/static', {templateUrl: "partials/static.html"});
    $routeProvider.when("/static/info", {});
    $routeProvider.otherwise({redirectTo: '/'});
    $locationProvider.html5Mode(false);
  }]);  
