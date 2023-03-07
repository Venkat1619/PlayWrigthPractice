import { Page } from "@playwright/test";

export class gotoCart{
    constructor(public page:Page){}

    async gottoCart(){
        await this.page.locator("//div[@class='shopping_cart_container']//a[1]").click();
    }
}