describe('content page', () => {
    it("should navigate to content page", async () => {
        await browser.url('http://localhost:9000');
        const contentLink = await browser.react$('Link', {
            props: {
                to: '/content'
            }
        });
        await contentLink.click();
        // await browser.debug();
        // await (await browser.react$('Content')).waitForExist({ timeout: 3000 })
        expect(await (await browser.react$('Content')).isDisplayed()).toBe(true);
    });
});
