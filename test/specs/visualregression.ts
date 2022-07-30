import SafetyPage from '../pageobjects/safety.page';

xdescribe("Visual Regression", () => {
  before(async () => {
      SafetyPage.open();  
      browser.maximizeWindow();
      await $('#onetrust-accept-btn-handler').click();
  });

  it("should save some screenshots", async () => {
      // Save a screen
      await browser.saveScreen("safetyDetailsPage", {
      });

      // Save an element
      await browser.saveElement(
          await SafetyPage.infoHeader,
          "firstButtonElement", {

          });

      // Save a full page screenshot
      await browser.saveFullPageScreen("fullPage", {
          /* some options */
      });

      // Save a full page screenshot with all tab executions
      await browser.saveTabbablePage("save-tabbable", {
          /* some options, use the same options as for saveFullPageScreen */
      });
  });

  it("should compare successful with a baseline", async () => {
      // Check a screen
      await expect(
          await browser.checkScreen("safetyDetailsPage", {
          })
      ).toEqual(0);

      // Check an element
      await expect(
          await browser.checkElement(
              await SafetyPage.infoHeader,
              "firstButtonElement",  {
              })
      ).toEqual(0);

      // Check a full page screenshot
      await expect(
          await browser.checkFullPageScreen("fullPage", {
          })
      ).toEqual(0);

      // Check a full page screenshot with all tab executions
      await expect(
          await browser.checkTabbablePage("check-tabbable", {
          })
      ).toEqual(0);
  });
});