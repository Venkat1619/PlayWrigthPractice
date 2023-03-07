import { Page } from "@playwright/test";

export class LoginPage{
    constructor(public page:Page){}

    async login(email:string,password:string){
        await this.enterUser(email),
        await this.enterPassword(password),
        await this.clickSubmit()
    }

    async enterUser(user:string){
        await this.page.locator("#user-name").type(user)
    }
    async enterPassword(password:string){
        await this.page.locator("#password").type(password)
    }
    async clickSubmit(){
        await Promise.all([
            this.page.waitForNavigation(),
            this.page.click("#login-button")
        ])
    }

}