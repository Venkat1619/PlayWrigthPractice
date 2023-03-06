import {expect,test} from "@playwright/test";

test("click events",async ({page})=>{
    await page.goto("https://automatenow.io/sandbox-automation-testing-practice-website/click-events/");
    expect(page).toHaveURL("https://automatenow.io/sandbox-automation-testing-practice-website/click-events/");
    await page.locator("(//button[@class='custom_btn btn_hover'])[1]").click();
    expect(await page.locator("#demo")).toContainText("Meow!")
    
    
})