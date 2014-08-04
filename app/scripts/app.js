'use restrict';

angular.module('myPostWeb',[
 'ngRoute',
 'ngResource'
]);

angular.module('myPostWeb')
.config([
  '$routeProvider',
   function($routeProvider){
       $routeProvider
           .when('/',{
               templateUrl:'views/postList.html',
               controller:'postCtrl'
           })
           .otherwise({
               redirectTo:'/'
           })
   }
])
.constant('serviceBaseUrl','http://localhost:10000/api')