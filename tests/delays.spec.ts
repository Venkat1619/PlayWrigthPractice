import {test,expect} from "@playwright/test";

test("delays testing",async({page})=>{
    await page .goto("https://automatenow.io/sandbox-automation-testing-practice-website/javascript-delays/")
    await page.click("//button[@class='custom_btn btn_hover']");
    expect( await page.locator("#delay").count()).toBe(1);



})