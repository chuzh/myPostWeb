// spec.js
describe('angularjs homepage', function() {
    var postList = element.all(by.repeater('post in postList'));

    beforeEach(function() {
        browser.get('/myPostWeb/app/index.html#/');
    });

    it('should have the postList', function() {
        expect(postList.count()).toEqual(2);
        expect(postList.first().getText()).toContain('[1] This iceberg llks like Batman');
        expect(postList.first().getText()).toContain('2 comments');
        expect(postList.last().getText()).toContain('[2] Came in to get spayed. Seems a little worried');
        expect(postList.last().getText()).toContain('2 comments');
    })

    it('should execute ng-click and change url when ng-href specified', function() {
        var link = element(by.id('post1'));
        expect(link.getAttribute('href')).toMatch(/\/commentList\/post1$/);
        link.click();

        // At this point, we navigate away from an Angular page, so we need
        // to use browser.driver to get the base webdriver.

        browser.wait(function() {
            return browser.driver.getCurrentUrl().then(function(url) {
                return url.match(/\/commentList\/post1$/);
            });
        }, 5000, 'page should navigate to /commentList/post1');
    });
});