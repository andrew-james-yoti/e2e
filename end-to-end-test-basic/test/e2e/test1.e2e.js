describe("My App", () => {
  it("should run my test",  async () => {
      await browser.url('http://localhost:9000');
      const title = await browser.getTitle();
      // const myComponent = await browser.react$('Header')
      // console.log(myComponent.isDisplayed());
      expect(await (await browser.react$('Header')).isDisplayed()).toBe(true);
      // 
      console.log('########### title', title);
      // browser.debug();
      // var outerHTML = await browser.$('body').getHTML();
      // console.log(myComponent);
      expect(title).toBe('End to End tests') // pass
  });
});