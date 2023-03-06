import {expect,test} from "@playwright/test";

test("upload files",async({page})=>{
    await page.goto("https://automatenow.io/sandbox-automation-testing-practice-website/file-upload/");
    await page.setInputFiles("#file_upload","./tests/sample.txt");
    await page.locator("//input[@type='submit']").click();
    expect(await page.locator("//div[text()='File upload complete']")).toContainText("File upload complete")
    await page.waitForTimeout(3000)
})