 export{}
 const {test,expect} = require("@playwright/test");

 test("table testing",async({page})=>{
    await page.goto("https://automatenow.io/sandbox-automation-testing-practice-website/tables/");
    expect(await page).toHaveURL("https://automatenow.io/sandbox-automation-testing-practice-website/tables/")
     const table=await page.locator("#tablepress-1")
     expect(await page).toHaveTitle("Tables | automateNow")
    const headers= await table.locator("thead");
    console.log(await headers.first().allTextContents());

    await headers.locator("th.column-1.sorting").click();
    await headers.locator("th.column-2.sorting").click();
    await headers.locator("th.column-3.sorting").click();

    const wholeTable= await page.locator("#tablepress-1_wrapper");

//Drop Down in Table
    await page.locator("#tablepress-1_wrapper");
    await page.selectOption("//div[@class='dataTables_length']//select[1]",{
        index:1    });
     await page.waitForTimeout(3000);

 // search in table
     const search = await wholeTable.locator("div#tablepress-1_filter>label>input")
     await search.type("China");
    await page.waitForTimeout(3000);
   
 })
 