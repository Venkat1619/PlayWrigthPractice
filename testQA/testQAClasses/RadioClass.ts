import { Page } from "@playwright/test";

export class radio {
    constructor(public page: Page) { }
    async yesRadioButton() {
        await this.page.click("label[for='yesRadio']");
    }
    async impressiveRadioButton() {
        await this.page.click("label[for='impressiveRadio']");
    }
}