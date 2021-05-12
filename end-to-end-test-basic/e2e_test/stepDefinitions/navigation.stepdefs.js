import { Given, When, Then } from '@cucumber/cucumber';

import ContentPage from "../pages/ContentPage";
import HomePage from "../pages/HomePage";
import chai from "chai";

const expect = chai.expect;


Given(
  "I open the home webpage of {string}", async (urlPath) => {
    await browser.url(urlPath);
  }
);

When(
  "I click on the visible content page link", async () => {
    await HomePage.clickContentPageLink();
  }
);

Then(
  "I should be on the content page", async () => {
    expect(await ContentPage.getContentText()).to.contain("Lorem");
  }
);