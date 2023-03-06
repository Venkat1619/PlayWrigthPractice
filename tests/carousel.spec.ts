export{}

import {test,expect} from "@playwright/test";

test("carousel testing ",async({page})=>{
    await page.goto("https://automatenow.io/sandbox-automation-testing-practice-website/carousel/");
    await page.locator("//button[@aria-label='Previous']").click();
    await page.locator("//button[@aria-label='Previous']").click();
    expect (await page).toHaveTitle("Carousel | automateNow")
})