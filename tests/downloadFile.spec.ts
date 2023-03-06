import test from "@playwright/test"

export{}

test("Download file",async({page})=>{
    await page.goto("https://automatenow.io/sandbox-automation-testing-practice-website/file-download/");
    const download= await Promise.all([
        page.waitForEvent("download"),
        page.click("a.wpdm-download-link.download-on-click")

    ])
   const fileName= await download[0].suggestedFilename()
    await download[0].saveAs(fileName)

   const download1= await Promise.all([
    page.waitForEvent("download"),
    page.click("a.wpdm-download-link.wpdm-download-locked")
   ])
    const fileName1= await download1[0].suggestedFilename()
    await download1[0].saveAs(fileName1)
});


//  secure file downlaod need password to download
test("Download file",async({page})=>{
    await page.goto("https://automatenow.io/sandbox-automation-testing-practice-website/file-download/");
   
   const download= await Promise.all([
    
    page.waitForEvent("download"),
    
    page.click("a.wpdm-download-link.wpdm-download-locked"),
   
   ]);
  await page.locator("input.wpdm_submit.btn.btn-secondary").click()

    const fileName= await download[0].suggestedFilename()

    await download[0].saveAs(fileName);

})