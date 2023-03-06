export{}

import {test,expect} from '@playwright/test'
 test("Accordions",async ({page})=>{
    await page.goto("https://automatenow.io/sandbox-automation-testing-practice-website/accordions/");
   expect(await page).toHaveURL("https://automatenow.io/sandbox-automation-testing-practice-website/accordions/");
   
   await page.click("summary");
   const value = await page.locator("//p[text()='This is an accordion item.']");
   expect(value).toContainText("This is an accordion item.");
   await page.click("summary");

 })