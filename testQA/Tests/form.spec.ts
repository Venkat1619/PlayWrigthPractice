import { test, expect } from '@playwright/test';
import { formClass } from '../testQAClasses/formClass';
test("form", async ({ page, baseURL }) => {
    const fname = "venkat"
    const lname = "sai"
    const email = "abc@gmail.com"
    const mob = "1234567891"
    const dob = "14 Mar 2023"
    const sub = "hello!"
    const address = "Hyderabad"
    const form = new formClass(page);
    await page.goto(`${baseURL}automation-practice-form`);
    await form.formFunc(fname, lname, email, mob, sub, address);
    await form.clickSubmit();
    await expect(page.locator("//div[@class='modal-title h4']")).toContainText("Thanks for submitting the form")

})

