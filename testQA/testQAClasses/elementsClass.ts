import { Page } from "@playwright/test";

export class element {
    constructor(public page: Page) { }
    async enterFullName(fname: string) {
        await this.page.locator("#userName").type(fname);

    }
    async enterEmail(email: string) {
        await this.page.locator("#userEmail").type(email);

    }
    async enterCurrentAddress(address: string) {
        await this.page.locator("#currentAddress").type(address);

    }
    async enterPermanentAddress(Peraddress: string) {
        await this.page.locator("#permanentAddress").type(Peraddress);

    }
    async clickSubmit() {
        await this.page.click("#submit")

    }

}