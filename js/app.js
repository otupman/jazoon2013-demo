'use strict';


// Declare app level module which depends on filters, and services
angular.module('JazoonDemoApp', 
	['Centralway.lungo-angular-bridge', 'ngResource'])
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    
    // Simple route with template and controller
    $routeProvider.when('/add', {templateUrl: '/partials/add.html', controller: 'AddCtrl'});
    
    /**
     * Examples of 'grouped' views. Navigating between them will _not_ result in a forward/backward transition
     * a navigation to another parent (i.e. /) will result in a transition.
     */
    $routeProvider.when('/todo/view/:todoId',   {templateUrl: '/partials/view.html', controller: 'ViewTodoCtrl'});
    $routeProvider.when('/todo/delete/:todoId', {templateUrl: '/partials/view.html'});
    
    /**
     * A "catch-all" handler: if the user navigates to a non-existing route, the app will go there
     */
    $routeProvider.otherwise({redirectTo: '/'});
    
    $locationProvider.html5Mode(false); // HTML 5 mode will not work within PhoneGap
  }])
  .config(['$httpProvider', function($httpProvider) {
    // Ensuring that we always request JSON
    $httpProvider.defaults.headers.common = { 'Accept': 'application/json'};
    $httpProvider.defaults.headers.get  = { 'Accept': 'application/json' };
    $httpProvider.defaults.headers.post = { 'Accept': 'application/json', 'Content-Type': 'application/json' };
    $httpProvider.defaults.headers.options = { 'Accept': 'application/json' };
  }])
;  
