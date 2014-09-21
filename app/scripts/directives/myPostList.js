var app = angular.module('myPostWeb.directives', []);

app.directive('myPostList', function() {
    return {
        restrict: 'E',
        replace: true,
        template: '<li>'+'<div>[{{$index + 1}}] {{post.title}}  </div>'
            +'<div>submitted by {{post.author.name}} /<div>'
            +'<div><a id="post{{$index+1}}" ng-href="#/commentList/{{post._id}}">{{post.comments.length}} comments </a></div>'
          +'</li>'
    };
});