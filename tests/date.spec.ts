export{}
import {test,expect} from "@playwright/test"


test("dates testing for current year and month",async({page})=>{
    await page.goto("https://automatenow.io/sandbox-automation-testing-practice-website/calendars/");
    await page .locator("//input[contains(@class,'date jp-contact-form-date')]").click();
    await page.locator("//a[text()='3']").click()
     await page.locator("(//button[@type='submit'])[1]").click()
    
});

test("dates for prev or next month",async({page})=>{
    await page.goto("https://automatenow.io/sandbox-automation-testing-practice-website/calendars/");
    await page.locator("//input[contains(@class,'date jp-contact-form-date')]").click()
    const mmyy = await page.locator("ui-datepicker-title");
    const prev = await page.locator("//a[@data-handler='prev']");
    const next = await page.locator("//a[@data-handler='next']");

   //select prev month
    await prev.click();
    await page.locator("//a[text()='1']").click();

    //select next month
    await next.click();
    await page.locator("//a[text()='1']").click();

   
    await page.locator("//table[@class='ui-datepicker-calendar']/tbody[1]/tr[2]/td[3]/a[1]").click()
    
})

test("dates for prev or next month with loop",async({page})=>{
    const month :string="April"
    const year:string="2024"
    await page.goto("https://automatenow.io/sandbox-automation-testing-practice-website/calendars/");
    await page.locator("//input[contains(@class,'date jp-contact-form-date')]").click()
   
    while(true){
        const textmonth=   await page.locator("//div[@class='ui-datepicker-title']//span[1]").textContent();
        const texyear= await page.locator("//span[@class='ui-datepicker-month']/following-sibling::span[1]").textContent()
       const f= (month === textmonth && year === texyear)
if(f ){
        break;

}
else{
    // next symblo x-path
    await page.locator("(//a[@data-event='click'])[2]").click()

}
    }
    // day x-path
    await page.locator("//table[@class='ui-datepicker-calendar']/tbody[1]/tr[2]/td[3]/a[1]").click()
    
})