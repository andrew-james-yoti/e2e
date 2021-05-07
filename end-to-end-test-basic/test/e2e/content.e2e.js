describe('Content page', () => {
    it('should display the page content', () => {
        browser.waitForAngularEnabled(false);
        browser.get('http://localhost:9000');
        element(by.linkText('Content Page')).click();
        const content = element(by.css('[data-qa="content"]'));
        expect(content.isPresent()).toBe(true);
    });
});
