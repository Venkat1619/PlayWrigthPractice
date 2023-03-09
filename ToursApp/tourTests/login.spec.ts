import { test, expect } from "@playwright/test"
import { Home } from "../class/Home"
import { login } from "../class/login"

test("", async ({ page, baseURL }) => {
    const loginFunc = new login(page)
    await page.goto(`${baseURL}login.php`)
    await loginFunc.userName("steku");
    await loginFunc.password("steku");
    await loginFunc.submit();
    expect(await page.locator("//h3[text()='Login Successfully']")).toContainText("Login Successfully")
})

test("HomePage", async ({ page, baseURL }) => {
    const flight = new Home(page);
    await page.goto(`${baseURL}reservation.php`);
    await flight.radioButton();
    expect(await page.locator("//input[@value='oneway']")).toBeChecked()
    await flight.dropDownPassenger()
    await flight.departing();
    await flight.onMonth();
    await flight.onYear();
    await flight.Arriving();
    await flight.returning();
    await flight.returningYear();
    await flight.classRadioButton();
    expect(await page.locator("input[value='Business']")).toBeChecked();
    await flight.airLine();
    await flight.continue();
})

