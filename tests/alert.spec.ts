import { expect } from "@playwright/test";

const {test} = require("@playwright/test");
//alert popup
test("alert ",async({page})=>{
    await page.goto("https://automatenow.io/sandbox-automation-testing-practice-website/");

    page.on("dialog",async(alert)=>{
        const text=  alert.message()
        console.log(text)
        await alert.accept();
    });
    await page.locator("//a[contains(text(),'Popups')]").click();
    const alertOk= page.locator("//b[text()='Alert Popup']")
       await  alertOk .click()
});

//confirm popup

test("ok or cancel alert",async({page})=>{
    await page.goto("https://automatenow.io/sandbox-automation-testing-practice-website/");
    page.on("dialog",async(alert)=>{
        const type=alert.message();
        console.log(type);
        await alert.accept();
    });
    await page.locator("//a[contains(text(),'Popups')]").click();
     await page.locator("//b[text()='Confirm Popup']").click();
     expect(page.locator("#confirmResult")).toContainText(("OK it is!"))
     
});

//propmt popup

test("Prompt Popup",async({page})=>{
    await page.goto("https://automatenow.io/sandbox-automation-testing-practice-website/");
    page.on("dialog",async(alert)=>{
        await alert.accept("sai")
    })
    await page.locator("//a[contains(text(),'Popups')]").click();
    await page.locator("#prompt").click();
    expect(await page.locator("#promptResult")).toContainText("Nice to meet you, sai!")

})
