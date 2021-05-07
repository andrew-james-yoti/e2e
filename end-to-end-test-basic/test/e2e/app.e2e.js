describe('Protractor Demo App', function() {
    it('should have a title', function() {
        browser.waitForAngularEnabled(false);
        browser.get('http://localhost:9000');

        expect(browser.getTitle()).toEqual('End to End tests');

        const header = element(by.css('[data-qa="header"]'));
        expect(header.getText()).toBe('End To End Tests');
    });
});