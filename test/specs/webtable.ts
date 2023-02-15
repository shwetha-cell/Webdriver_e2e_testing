import countryname from "../pageobjects/countryname.js";
describe('validating multiple table',async () => {
 it('test1', async() => {
    await browser.url("https://cosmocode.io/automation-practice-webtable/");
     await browser.maximizeWindow();
      await browser.scroll(200,150);
       (await countryname.selectOne(await countryname.multipleSelection())).click();
    
        await browser.pause(5000);
     });
    });