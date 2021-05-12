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
    return text;
  };
}

export default new ContentPage();