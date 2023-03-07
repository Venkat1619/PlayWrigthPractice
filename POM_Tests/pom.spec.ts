import { test, expect } from "@playwright/test";
import { addtoCart } from "../POMclass/addtoCart";
import { checkOut } from "../POMclass/checkOut";
import { filterPage } from "../POMclass/filter";
import { gotoCart } from "../POMclass/gotoCart";
import { LoginPage } from "../POMclass/loginPage";
import { logOut } from "../POMclass/logOut";

let user = "standard_user";
let pass = "secret_sauce"
test("pom test for login",async({page,baseURL})=>{
      const login = new LoginPage(page)
      await page.goto(`${baseURL}`);
      expect(page).toHaveURL(`${baseURL}`);
      await login.enterUser(user);
      expect( await page.locator("#user-name")).toHaveAttribute("placeholder","Username");
      await login.enterPassword(pass);
      expect( await page.locator("#password")).toHaveAttribute("placeholder","Password");
      await login.clickSubmit()
      expect(await page).toHaveURL("https://www.saucedemo.com/inventory.html");    
});

test("filter test",async({page,baseURL})=>{
    const login = new LoginPage(page);
    const filter = new filterPage(page);
    await page.goto(`${baseURL}`);
    await login.enterUser(user);
    await login.enterPassword(pass);
    await login.clickSubmit();
     await filter.filter();   
})

test("addtoCart test",async({page,baseURL})=>{
    const login = new LoginPage(page);
    const filter = new filterPage(page);
    const cart = new addtoCart(page)
    await page.goto(`${baseURL}`);
    await login.enterUser(user);
    await login.enterPassword(pass);
    await login.clickSubmit();
     await filter.filter(); 
     await cart.addtoCart();
})

test("gotoCart test",async({page,baseURL})=>{
    const login = new LoginPage(page);
    const filter = new filterPage(page);
    const cart = new addtoCart(page);
    const gotocart = new gotoCart(page);
    await page.goto(`${baseURL}`);
    await login.enterUser(user);
  expect( await page.locator("#user-name")).toHaveAttribute("placeholder","Username");
    await login.enterPassword(pass);
 expect( await page.locator("#password")).toHaveAttribute("placeholder","Password");
    await login.clickSubmit();
     await filter.filter(); 
     await cart.addtoCart();
     await gotocart.gottoCart();

})

test("checkoutCart test", async ({ page, baseURL }) => {
    const login = new LoginPage(page);
    const filter = new filterPage(page);
    const cart = new addtoCart(page);
    const gotocart = new gotoCart(page);
    const check = new checkOut(page);
    const logout = new logOut(page);
    await page.goto(`${baseURL}`);
    await login.enterUser(user);
    expect(await page.locator("#user-name")).toHaveAttribute("placeholder", "Username");
    await login.enterPassword(pass);
    expect(await page.locator("#password")).toHaveAttribute("placeholder", "Password");
    await login.clickSubmit();
    await filter.filter();
    await cart.addtoCart();
    await gotocart.gottoCart();
    await check.checkOutCart(user, pass, "520008");
    expect(await page.locator("#first-name")).toHaveAttribute("placeholder", "First Name");
    expect(await page.locator("#last-name")).toHaveAttribute("placeholder", "Last Name");
    expect(await page.locator("#postal-code")).toHaveAttribute("placeholder", "Zip/Postal Code");
    await check.clicktoContinue();
    await check.clicktofinish();
    expect(await page.locator("//h2[text()='Thank you for your order!']")).toContainText("Thank you for your order!");
    await logout.logOut();






})