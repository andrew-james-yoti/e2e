describe('content page', () => {
  it("should navigate to content page", async () => {
      await browser.url('http://localhost:9000');
      const contentLink = await browser.react$('Link', {
          props: {
              to: '/content'
          }
      });
      await contentLink.click();
      expect( (await (browser.react$('Content'))).isDisplayed().toBe(true));
  });
});