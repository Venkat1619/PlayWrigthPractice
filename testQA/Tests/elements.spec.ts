import { test, expect } from "@playwright/test"
import { checkBox } from "../testQAClasses/checkBoxClass";
import { element } from "../testQAClasses/elementsClass";

test("TextBox tetsing", async ({ page, baseURL }) => {
    const textBox = new element(page)
    await page.goto(`${baseURL}text-box`);
    expect(await page).toHaveURL("https://demoqa.com/text-box");
    await textBox.enterFullName("venkat");
    expect(await page.locator("#userName")).toHaveAttribute("placeholder", "Full Name")
    await textBox.enterEmail("abc@gmail.com");
    expect(await page.locator("#userEmail")).toHaveAttribute("placeholder", "name@example.com")
    await textBox.enterCurrentAddress("hyderabad");
    expect(await page.locator("#currentAddress")).toHaveAttribute("placeholder", "Current Address")
    await textBox.enterPermanentAddress("hyderabad");
    await textBox.clickSubmit();

})