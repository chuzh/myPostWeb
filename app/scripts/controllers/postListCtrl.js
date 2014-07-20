'use strict';

angular.module('myPostWebApp')
    .controller('postListCtrl',['$scope','postSvc', function ($scope, postSvc) {
        postSvc.findAll( function(posts){
            $scope.allPosts = posts;
        });
    }]);