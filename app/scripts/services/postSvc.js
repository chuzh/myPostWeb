'use strict';

angular.module('myPostWeb.services',[
    'ngResource'
]);

angular.module('myPostWeb.services')
    .factory('postSvc', ['$resource', 'serviceBaseUrl',
        function($resource, serviceBaseUrl) {
            return $resource(serviceBaseUrl+'/post/findAll',{},{
                findAll: {method: 'GET', isArray: true},
                findPostById: {method: 'GET', url: serviceBaseUrl + '/post/findPostById/:id'}
            });
        }]);