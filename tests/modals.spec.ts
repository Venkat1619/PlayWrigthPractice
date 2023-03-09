import {test,expect} from "@playwright/test";

test("modals testing",async({page})=>{
    await page .goto("https://automatenow.io/sandbox-automation-testing-practice-website/modals/")
    await page.click("#simpleModal");
   expect( await page.locator("//p[text()='Hi, I’m a simple modal.']")).toContainText("Hi, I’m a simple modal")
})

test("modals testing",async({page})=>{
    await page .goto("https://automatenow.io/sandbox-automation-testing-practice-website/modals/")
    await page.click("#formModal");
   expect(await page.locator("//div[text()[normalize-space()='Modal Containing A Form']]")).toContainText('Modal Containing A Form');
   await page.fill("//input[contains(@class,'name ')]","abc");
   await page.fill("//input[contains(@class,'email ')]","abc@gmail.com");
   await page.fill("//textarea[contains(@class,'textarea ')]","hello");
   await page.click("//button[text()='Submit']")

})