import { Page } from "@playwright/test";

export class brokenimg {
  constructor(public page: Page) { }

  async verifyBrokenImages() {

    const images = await this.page.$$('img');

    for (const image of images) {
      const isBroken = await image.evaluate((img) => {
        return img.naturalWidth === 0 || img.naturalHeight === 0;
      });
      if (isBroken) {
        console.log(`Image ${await image.getAttribute('src')} is broken`);
      }
      else {
        console.log(`Image ${await image.getAttribute('src')} is not broken`);

      }
    }

  }

  async verifyLinks() {
    await this.page.locator("//a[contains(text(),'Click Here for Valid Link')]").click()
  }
  async verifyBrokenLinks() {
    await this.page.locator("//a[contains(text(),'Click Here for Broken Link')]").click()
  }

}