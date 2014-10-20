var app = angular.module('myPostWeb.directives', []);

app.directive('myPostList', function() {
    return {
        restrict: 'E',
        replace: true,
        template: '<li>'+'<dt> {{post.title}}  </dt>'
            +'<dd>submitted by {{post.author.name}} </dd>'
            +'<div><a id="post{{$index+1}}" ng-href="#/commentList/{{post._id}}">comments <span class="badge">{{post.comments.length}}</span> </a></div>'
          +'</li>'
    };
});