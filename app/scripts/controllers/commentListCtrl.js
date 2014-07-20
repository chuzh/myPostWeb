'use strict';

angular.module('myPostWebApp')
  .controller('commentListCtrl', ['$scope', '$routeParams','postSvc',
    function ($scope,$routeParams,postSvc) {
      var params = {id:$routeParams.post_id};

      postSvc.findPostById(params,
        function(post){
          $scope.post = post;
        },
        function(err){
          console.log(err);
        }
      );
}]);