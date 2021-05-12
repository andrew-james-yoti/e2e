function ContentPage() {
  /**
   * define elements
   */
  const contentText = $('[data-qa="content"]');

  /**
   * your page specific methods
   */
  this.getContentText = async () => {
    const text = await (await (contentText)).getText();
    console.log("THIS IS the text", text)
    return text;
  };
}

export default new ContentPage();


describe('content page', () => {
  it("should navigate to content page", async () => {
      await browser.url('http://localhost:9000');
      const contentLink = await browser.react$('Link', {
          props: {
              to: '/content'
          }
      });
      await contentLink.click();
      expect(await (await (browser.react$('Content'))).isDisplayed().toBe(true));
  });
});