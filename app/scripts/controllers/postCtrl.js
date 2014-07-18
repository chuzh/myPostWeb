'use strict';

angular.module('myPostWebApp')
    .controller('postCtrl',['$scope','postSvc', function ($scope, postSvc) {
        postSvc.findAll( function(posts){
            $scope.allPosts = posts;
        });
    }]);