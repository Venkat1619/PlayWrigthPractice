export{}
import {test,expect} from "@playwright/test"

test("formField testing",async({page})=>{
    await page.goto("https://automatenow.io/sandbox-automation-testing-practice-website/form-fields/");
    expect(page).toHaveURL("https://automatenow.io/sandbox-automation-testing-practice-website/form-fields/");
    
    //input field
    await page.fill("(//input[contains(@class,'name ')])[1]","venkat");
    (expect(await page).toHaveTitle("Form Fields | automateNow"));
 
    //check box in form
   const checkBox= await page.locator("input[value='Water']")
    expect(checkBox).not.toBeChecked();
    await checkBox.click();
    expect(checkBox).toBeChecked();

    const check=await page.locator("input[value='Red']");
    expect(check).not.toBeChecked();
    await check.click();
    expect(check).toBeChecked();
    
    await page.locator("span.ui-selectmenu-icon.ui-icon").click();
    await page.locator("#ui-id-2").click();

    //input
    await page .fill("#email","abc@gmail.com");
    await page.fill("#contact-form-comment-message","hello world!");
    await page.locator("(//button[@type='submit'])[1]").click();
    
})