import { Page } from "@playwright/test";

export class Home{
    constructor(public page:Page){}

    async radioButton(){
        await this.page.click("//input[@value='oneway']")
    }
    async dropDownPassenger(){
        //  await this.page.locator("(//form[@action='reservation2.php']//select)[1]")
         await this.page.selectOption(`(//form[@action='reservation2.php']//select)[1]`,[

                {
                     index :2
                }
            ]);
    }
    async departing(){
        await this.page.selectOption(`(//form[@action='reservation2.php']//select)[2]`,[

                {
                     index :3
                }
            ]);
       
    }
    async onMonth(){
        await this.page.selectOption(`select[name='fromMonth']`,[

                {
                     index :4
                }
            ]);
       
    }
    async onYear(){
        await this.page.selectOption(`select[name='fromDay']`,[

                {
                     index :3
                }
            ]);
       
    }
    async Arriving(){
        await this.page.selectOption(`select[name='toPort']`,[

                {
                     index :2
                }
            ]);
       
    }
    async returning(){
        await this.page.selectOption(`select[name='toMonth']`,[

                {
                     index :2
                }
            ]);
       
    }
    async returningYear(){
        await this.page.selectOption(`select[name='toDay']`,[

                {
                     index :2
                }
            ]);
       
    }
    async classRadioButton(){
        await this.page.click("input[value='Business']")
    }
    async airLine(){
        await this.page.selectOption(`//select[@name='airline']`,[

                {
                     index :2
                }
            ]);
       
    }
    async continue(){
     await this.page.click("//input[@type='image']")
    }
}