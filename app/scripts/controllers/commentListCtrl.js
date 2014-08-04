'user restrict';

angular.module('myPostWeb')
.controller('commentListCtrl'
    ,['$scope','$routeParams', 'postSvc',
        function($scope,$routeParams, postSvc){
            var params ={id:$routeParams.post_id};
            postSvc.findPostById(params,
                function(post){
                $scope.commentList = post.comments;
            },
                function(err){
                alert(err);
            });
        }]);