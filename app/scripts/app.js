'use restrict';

angular.module('myPostWeb',[
 'ngRoute',
 'myPostWeb.services',
  'myPostWeb.directives',
  'ui.bootstrap'
]);

angular.module('myPostWeb')
.config([
  '$routeProvider',
   function($routeProvider){
       $routeProvider
           .when('/',{
               templateUrl:'views/postList.html',
               controller:'postListCtrl',
               caseInsensitiveMatch: true
           })
           .when('/postList',{
               templateUrl:'views/postList.html',
               controller:'postListCtrl',
               caseInsensitiveMatch: true
           })
           .when('/commentList/:post_id',{
               templateUrl:'views/commentList.html',
               controller:'commentListCtrl',
               caseInsensitiveMatch: true
           })
           .otherwise({
               redirectTo:'/'
           })
   }
])
.constant('serviceBaseUrl','http://localhost:10000/api')