'use strict';

var services = angular.module('myPostWeb.services',
    ['ngResource']);

angular.module('myPostWebApp')
    .factory('postSvc', ['$resource', 'baseUrl',
    function($resource, baseUrl) {
        return $resource(baseUrl+'/post/findAll',{},{
            findAll: {method: 'GET', isArray: true},
            findPostById: {method: 'GET', url: baseUrl + '/post/findPostById/:id'}
        });
    }]);