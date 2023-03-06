export{}

import {test,expect} from "@playwright/test";

test("window Operation  for new tab ",async({page})=>{

    await page.goto("https://automatenow.io/sandbox-automation-testing-practice-website/window-operations/");
   const [newWindow] = await Promise.all([
        page.waitForEvent("popup"),
        page.click("//b[text()='New Tab']")

     ])
     console.log(newWindow.url())



});

test("window Operation  for replace tab ",async({page})=>{

    await page.goto("https://automatenow.io/sandbox-automation-testing-practice-website/window-operations/");
   const [newWindow] = await Promise.all([
        page.waitForEvent("popup"),
        page.click("//b[text()='Replace Window']")

     ])
     console.log(newWindow.url())
})