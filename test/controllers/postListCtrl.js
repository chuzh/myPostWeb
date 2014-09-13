'use strict';


describe('Controller: commentListCtrl', function () {
var mockPostList = [
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

    },
    {
        "_id":"post2",
        "category":"Arts",
        "title":"Came in to get spayed. Seems a little worried",
        "picture":"",
        "comments":[
            {
                "id":"comment21",
                "post":{
                    "id":"post2"
                },
                "author":{
                    "name": "seancouver",
                    "author_id": "author2"
                },
                "content":"looks like Bark Wahlberg to me.",
                "create_time": "2013-01-02 11:12",
                "comments":[]
            } ,
            {
                "id":"comment22",
                "post":{
                    "id":"post2"
                },
                "author":{
                    "name": "dusthimself",
                    "author_id": "author2"
                },
                "content":"looks like Bark Wahlberg to me.",
                "create_time": "2013-01-02 11:12",
                "comments":[]
            }
        ],
        "author": {
            "id": "author2",
            "name": "seancouver"
        },
        "receipient":{
            "id": "xxx",
            "name": "eightbitlincoln"
        },
        "create_time": "2013-01-01 10:10"

    }

];

    var
    postListCtrl, scope;

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
        postListCtrl = $controller('postListCtrl', {
            $scope: scope
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
            .expectGET(serviceBaseUrl + '/post/findAll').
            respond(mockPostList);

        //simulate response
        $httpBackend.flush();

        //verify results
        expect(scope.postList.length).toEqual(mockPostList.length);
        expect(scope.postList[0]._id).toEqual(mockPostList[0]._id);
    });


});
