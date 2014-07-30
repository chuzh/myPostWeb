angular.module('myPostWeb')
.controller('postCtrl',[
   '$scope',function($scope){
            $scope.postList = [
                {
                    title: 'post title 1',
                    comments: [{}]
                }
            ];
        }
]);