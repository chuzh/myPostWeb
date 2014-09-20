'use strict';


describe('my-post-list directive', function(){
    var elm, //directive element
        scope; //the scope where our directive is inserted


    //load the module we want to test
    beforeEach( function(){
        module('myPostWeb');
    } );

    //before each test, creates a new fresh scope
    //the inject function interest is to make use of angularJS
    //dependency injection to get some other services in our test
    //here we need $rootscope to create a new scope
    beforeEach(inject(function($rootScope){
        scope = $rootScope.$new();
    }));

    function compileDirective(tpl) {
        //function to compile a fresh directive with a give template, or a default one
        //compile the tpl with the $rootscope created above
        //wrap my directive inside a form to be able to test
        //that my form integration works well (via ngModelController)
        //our directive instance is then put in the global 'elm' variable for further tests
        if (!tpl) {
            tpl = '<my-post-list></my-post-list>';
        }

        //inject allows you to use AngularJS dependency injection
        //to retrive and use other services
        inject(function($compile){
            elm = $compile(tpl)(scope);
        });
        //@digets is necessary to finalize the directive generation
        scope.$digest();
    }

    describe('initialisation', function() {
        beforeEach(function () {
            compileDirective();
        });

        //check the produced DOM
        it('initialize key a should produce element', function () {
            //expect(elm[0].innerHTML).toEqual('<div class="ng-binding">[1]   </div><div class="ng-binding">submitted by  /<div><div><a ng-href="#/commentList/" class="ng-binding" href="#/commentList/"> comments </a></div></div></div>');
            expect(elm[0].innerHTML).toContain('ng-binding');
            expect(elm[0].innerHTML).toContain('commentList');

        });
    })
});
