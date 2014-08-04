'use strict';

angular.module('myPostWeb')
.controller('postListCtrl',[
   '$scope','postSvc',function($scope,postSvc){
            postSvc.findAll(function(posts){
                $scope.postList = posts;
            });
            /*
            $scope.postList = [
                {
                    title: 'post title 1',
                    comments: [{}]
                }
            ];*/
        }
]);