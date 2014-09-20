'use strict';

describe('Factory: postSvc', function () {
    var mockPosts = [{
        "_id":"post1",
        "category":"Arts",
        "title":"This iceberg llks like Batman",
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

    }];
    var $httpBackend,
        postSvc,
        urlBase;

    // Load the module that the controller you are testing is in
    beforeEach(module('myPostWeb'));

    beforeEach(function () {

        inject(function (_postSvc_, _$httpBackend_,_serviceBaseUrl_) {
            postSvc = _postSvc_;
            $httpBackend =  _$httpBackend_;
            urlBase = _serviceBaseUrl_;
        });

    });

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('Should define postSvc Factory', function () {
        expect(postSvc).toBeDefined();
    });

    it('should return postSvc list', function () {

        $httpBackend.whenGET(urlBase + '/post/findAll').
            respond(mockPosts);

        postSvc.findAll( function(data){
            expect(data[0]._id).toBe(mockPosts[0]._id);
            expect(data[0].title).toBe(mockPosts[0].title);
        });

        $httpBackend.flush();
    });

    it('should return postSvc by post ID', function () {

        $httpBackend.whenGET(urlBase + '/post/findPostById/postId').
            respond(mockPosts[0]);

        postSvc.findPostById({id:'postId'}, function(data){
            expect(data._id).toBe(mockPosts[0]._id);
            expect(data.title).toBe(mockPosts[0].title);
        });

        $httpBackend.flush();
    });


});
