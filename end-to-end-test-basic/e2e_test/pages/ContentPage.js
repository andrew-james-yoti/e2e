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