import { Page } from "@playwright/test";

export class checkOut{
    constructor(public page:Page){}

    async checkOutCart(firstname:string,lastname:string,pincode:any){
        await this.page.locator("#checkout").click();
        await this.page.locator("#first-name").type(firstname);
        await this.page.locator("#last-name").type(lastname);
        await this.page.locator("#postal-code").type(pincode);

    }
    async clicktoContinue(){
        await this.page.locator("#continue").click()

    }
    async clicktofinish(){
        await this.page.locator("#finish").click()
    }
}