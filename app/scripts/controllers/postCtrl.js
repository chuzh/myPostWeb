'use strict';

angular.module('myPostWeb')
.controller('postCtrl',[
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