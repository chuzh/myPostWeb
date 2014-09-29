'use strict';


describe('Controller: commentListCtrl', function () {
var mockPost =
    {
        "_id":"post1",
        "category":"Arts",
        "title":"This iceberg llkes Batman",
        "picture":"",
        "comments":[
            {
                "id":"comment11",
                "post":{
                    "id":"post1"
                },
                "author":{
                    "name": "dusthimself1",
                    "author_id": "author2"
                },
                "content":"1 looks like Bark Wahlberg to me.",
                "create_time": "2013-01-01 11:12",
                "comments":[]
            },
            {
                "id":"comment12",
                "post":{
                    "id":"post1"
                },
                "author":{
                    "name": "dusthimself2",
                    "author_id": "author2"
                },
                "content":"2 looks like Bark Wahlberg to me.",
                "create_time": "2013-01-01 11:12",
                "comments":[]
            }
        ],
        "author": {
            "id": "author1",
            "name": "eightbitlincoln"
        },
        "receipient":{
            "id": "xxx",
            "name": "eightbitlincoln"
        },
        "create_time": "2013-01-01 10:10"

    };

    var
    commentListCtrl, scope;

    var $httpBackend,
        serviceBaseUrl;

    beforeEach(function () {

        module('myPostWeb');

        inject(function (_$httpBackend_, _serviceBaseUrl_) {
            $httpBackend = _$httpBackend_;
            serviceBaseUrl = _serviceBaseUrl_;
        });
    });

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        commentListCtrl = $controller('commentListCtrl', {
            $scope: scope,
            $routeParams: {post_id: 'post1'}
        });
    }));

   /*
    beforeEach(inject(function ($controller, $rootScope) {
        $httpBackend.whenGET(serviceBaseUrl + '/post/findAll').
            respond(mockContact);
    }));
    */
    it('should get posts', function () {
        $httpBackend
            .expectGET(serviceBaseUrl + '/post/findPostById/post1').
            respond(mockPost);

        //simulate response
        $httpBackend.flush();

        //verify results
        expect(scope.commentList.length).toEqual(mockPost.comments.length);
    });


});
