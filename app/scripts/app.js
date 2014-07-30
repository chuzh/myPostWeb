angular.module('myPostWeb',[
 'ngRoute'
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
]);