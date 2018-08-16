describe('Pure360 Tech Test', function() {

    beforeEach(function() {
        browser.get('http://localhost:8080');
    });

    it('should have a title', () => {
        expect(browser.getTitle()).toEqual('Pure360');
    });

    it('should have 3 emails', () => {
        let list = $$('.inbox__list-info');
        expect(list.count()).toBe(3);
    });

    it('should filter by name', () => {
        element(by.className('search__input')).sendKeys('Rudy');
        let list = $$('.inbox__list-info');
        expect(list.count()).toBe(1);
        expect(element(by.className('inbox__list-from')).getText()).toBe('Rudy Stark')

    });
});