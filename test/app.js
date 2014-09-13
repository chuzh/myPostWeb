'use strict';

describe('$route', function() {
    var $httpBackend;

    beforeEach(module('ngRoute'));
    beforeEach(module('myPostWeb.services'));
    beforeEach(module( 'myPostWeb.directives'));

    beforeEach(module(function() {
        return function(_$httpBackend_) {
            $httpBackend = _$httpBackend_;
            $httpBackend.when('GET', 'views/postList.html').respond('postList');
        };
    }));
    beforeEach(module(function($routeProvider) {
        $routeProvider.when('/postList',
            {controller: angular.noop, templateUrl: 'views/postList.html'});
        $routeProvider.when('/Blank', {});
    }));

    it('should route and fire change event', function() {
        inject(function($route, $location, $rootScope) {
            $location.path('/postList');
            $rootScope.$digest();

            //$location.path('/Blank');
            //$rootScope.$digest();

            expect($route.current.originalPath).toBe('/postList');
            //expect($route.current.originalPath).toBe('/Blank');
        });
    });

});
