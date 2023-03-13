import { test, expect } from "@playwright/test";
import { buttonEx } from "../testQAClasses/buttonClass";

test("button tetsing", async ({ page, baseURL }) => {
    const doubleBtn = new buttonEx(page)
    await page.goto(`${baseURL}buttons`);
    // double click
    await doubleBtn.doubleClick();
    expect(await page.locator("#doubleClickMessage")).toContainText("You have done a double click")

    //rightclick
    await doubleBtn.rightClick();
    expect(await page.locator("#rightClickMessage")).toContainText("You have done a right click")


    //button click
    await doubleBtn.buttonClick();
    expect(await page.locator("#dynamicClickMessage")).toContainText("You have done a dynamic click")


})