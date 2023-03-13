import { test, expect } from '@playwright/test'
import { checkBox } from '../testQAClasses/checkBoxClass'

// test.describe("checkBox",async()=>{
test("checkBox testing", async ({ page, baseURL }) => {
  const check = new checkBox(page)

  await page.goto(`${baseURL}checkbox`);
  await check.clickExpandButton();
  await check.clickCollapseButton()
  await check.homeCheckBox();
  expect(await page.locator("(//input[@id='tree-node-home']/following-sibling::span)[3]")).toBeChecked();
  await check.clickDownArrow()
  await check.homeCheckBox();
  expect(await page.locator("(//input[@id='tree-node-home']/following-sibling::span)[3]")).not.toBeChecked();

  await check.desktopCheckBox()
  //desktop button to be checked
  expect(await page.locator("(//input[@id='tree-node-desktop']/following-sibling::span)[3]")).toBeChecked();
  //along with the desktop home also to be checked
  expect(await page.locator("(//input[@id='tree-node-home']/following-sibling::span)[3]")).not.toBeChecked();
  expect(await page.locator("//div[@class='display-result mt-4']")).toContainText("You have selected :desktopnotescommands");

  await check.clickDesktopDownArrow();
  await check.desktopCheckBox();
  // desktop toBe unchecked
  expect(await page.locator("(//input[@id='tree-node-desktop']/following-sibling::span)[3]")).not.toBeChecked();

  await check.notesCheckBox();
  expect(await page.locator("//div[@class='display-result mt-4']")).toContainText("You have selected :notes");






})
// })

