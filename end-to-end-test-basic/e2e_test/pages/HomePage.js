function HomePage() {
  /**
   * define elements
   */
  const contentPageLink = $('*=Content');

  /**
   * your page specific methods
   */
  this.clickContentPageLink = async () => {
    await (await contentPageLink).click();
  };
}

export default new HomePage();
