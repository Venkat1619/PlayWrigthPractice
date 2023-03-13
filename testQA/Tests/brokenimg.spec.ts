import { test, expect } from '@playwright/test';
import { brokenimg } from '../testQAClasses/brokenimgClass';

test("broken Images",async({page,baseURL})=>{
    const brimg = new brokenimg (page)
    await page.goto(`${baseURL}broken`);
    await brimg.verifyBrokenImages()
});

test("verifyLink",async({page,baseURL})=>{
    const brimg = new brokenimg (page)
    await page.goto(`${baseURL}broken`);
    await brimg.verifyLinks();
    await expect(page).toHaveURL("https://demoqa.com/")
});

test("verifyBrokenLink", async ({ page, baseURL }) => {
    const brimg = new brokenimg(page)
    await page.goto(`${baseURL}broken`);
    await brimg.verifyBrokenLinks();
    await expect(page).toHaveURL("http://the-internet.herokuapp.com/status_codes/500")
    let tex = `This page returned a 500 status code.
    
    For a definition and common list of HTTP status codes, go here`
    await expect(page.locator("//h3[text()='Status Codes']/following-sibling::p")).toContainText(tex)
})


