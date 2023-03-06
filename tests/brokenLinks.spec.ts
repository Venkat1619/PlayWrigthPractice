export{}
import {test,expect} from '@playwright/test';

test("Boken Links",async({page})=>{
    await page.goto("https://automatenow.io/sandbox-automation-testing-practice-website/broken-links/");
    expect(page).toHaveURL("https://automatenow.io/sandbox-automation-testing-practice-website/broken-links/");

    await page.click("//a[contains(text(),'Click me')]");
    //after clicking the broken url
    expect (page).toHaveURL("https://automatenow.iot/");
    
})