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
        .when('/postList', {
            templateUrl: 'views/postList.html',
            controller: 'postListCtrl'
        })
        .when('/commentList/:post_id', {
            templateUrl: 'views/commentList.html',
            controller: 'commentListCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
  })
    .constant('baseUrl', 'http://localhost:10000/api');
