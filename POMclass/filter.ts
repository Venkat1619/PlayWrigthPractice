import { Page } from "@playwright/test";

export class filterPage{
    constructor(public page:Page){}

    async filter(){
        await this.page.selectOption("select[data-test='product_sort_container']",{
            index:2
        })
    }
}