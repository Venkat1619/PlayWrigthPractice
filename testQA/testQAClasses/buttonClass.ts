import { Page } from "@playwright/test";

export class buttonEx {
    constructor(public page: Page) { }

    async doubleClick() {
        await this.page.locator("#doubleClickBtn").dblclick();

    }
    async rightClick() {
        await this.page.click('#rightClickBtn', {
            button: 'right',
        });
    }
    async buttonClick() {
        await this.page.click("//button[text()='Click Me']");
    }
}