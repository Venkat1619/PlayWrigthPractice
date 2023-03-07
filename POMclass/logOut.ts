import { Page } from "@playwright/test";

export class logOut{
    constructor(public page:Page){}
    async logOut(){
        await this.page.locator("#react-burger-menu-btn").click();
        await this.page.locator("#logout_sidebar_link").click();
    }
}