'use restrict';

angular.module('myPostWeb',[
 'ngRoute',
 'myPostWeb.services',
  'myPostWeb.directives'
]);

angular.module('myPostWeb')
.config([
  '$routeProvider',
   function($routeProvider){
       $routeProvider
           .when('/',{
               templateUrl:'views/postList.html',
               controller:'postListCtrl'
           })
           .when('/commentList/:post_id',{
               templateUrl:'views/commentList.html',
               controller:'commentListCtrl'
           })
           .otherwise({
               redirectTo:'/'
           })
   }
])
.constant('serviceBaseUrl','http://localhost:10000/api')