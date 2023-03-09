import { Page } from "@playwright/test";

export class login{
    constructor( public page:Page){

    }
    async userName(uName:string){
        await this.page.locator("input[name='userName']").type(uName);

    }
    async password(pass:string){
        await this.page.locator("input[name='password']").type(pass);

    }
    async submit(){
        await this.page.click("input[type='submit']");

    }
}