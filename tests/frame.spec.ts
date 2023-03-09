export { }
import { test, expect } from '@playwright/test'

test("iframe testing ", async ({ page }) => {
    await page.goto("https://automatenow.io/sandbox-automation-testing-practice-website/iframes/");
    const frame = page.frameLocator("#frame2");
    await frame.locator("//a[@class='AnchorLink NavBar__List--search']").click()
    expect(await frame.locator(("//input[@type='search']"))).toHaveAttribute("placeholder", "Search")
    await frame.locator("//div//ul//li[1]//a[@class='AnchorLink TermList__Link']").click();
    await frame.locator("//a[@class='AnchorLink NavBar__List--link']").click();
    expect(await frame.locator("//h1[@class='NewsletterSignup__Title']")).toContainText("Sign Up for National Geographic Newsletters");
    await frame.locator("//button[@class='Button Button--default Button--icon MenuModal__MenuButton NavBar__Menu--item']").click()

    await frame.locator("text=Login").click();
    const frames = frame.frameLocator("#oneid-iframe");
    await frames.locator("//input[@type='email']").fill("abc@gmail.com");
    await frames.locator("#BtnSubmit").click()
    await frames.locator("//input[@type='password']").fill("abc#123");
    await frames.locator("#BtnSubmit").click();
})