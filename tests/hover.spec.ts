import {test,expect} from "@playwright/test"

export{}
test("image Hover testing",async({page})=>{
    await page.goto("https://automatenow.io/sandbox-automation-testing-practice-website/hover/");
    expect(await page).toHaveURL("https://automatenow.io/sandbox-automation-testing-practice-website/hover/");

    await page.hover("#mouse_over");
    expect(await page.locator("#mouse_over")).toContainText("You did it!")

});