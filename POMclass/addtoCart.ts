import { Page } from "@playwright/test";

export class addtoCart{
    constructor(public page:Page){}

    async addtoCart(){
        await this.page.locator("#add-to-cart-sauce-labs-backpack").click()
    }
}