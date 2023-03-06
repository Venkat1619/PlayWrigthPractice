export{}
 import {test,expect} from '@playwright/test'

 test("searchBox ",async({page})=>{
    await page.goto("https://automatenow.io/sandbox-automation-testing-practice-website/search-box/");

    expect(page).toHaveURL("https://automatenow.io/sandbox-automation-testing-practice-website/search-box/");

    await page.fill("#wp-block-search__input-1","JMeter");
    await page.click("button.wp-block-search__button.wp-element-button");

    expect(await page).toHaveURL("https://automatenow.io/?s=JMeter");
   const x= (await page.locator(".breadcrumb_last"));
   expect(x).toHaveText("You searched for JMeter")

 })