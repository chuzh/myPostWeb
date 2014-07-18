'use strict';

angular.module('myPostWebApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
        .when('/allPosts', {
            templateUrl: 'views/allPosts.html',
            controller: 'postCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
  })
    .constant('baseUrl', 'http://localhost:10000/api');
