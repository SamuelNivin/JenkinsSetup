const { Builder, By, Capabilities } = require("selenium-webdriver");

describe("BStack demo test", () => {
  let driver;

  beforeAll(() => {
    driver = new Builder()
      .usingServer(`http://localhost:4444/wd/hub`)
      .withCapabilities(Capabilities.chrome())
      .build();
  });
  
  afterAll(async () => {
    await driver.quit();
  });

  test("local test", async () => {
    await driver.get("http://bs-local.com:45454/");
    
    const title = await driver.getTitle();
    console.log("🪪 Page title:", title);

    // Use a leniency check in case the title is blank on mobile browsers
    expect(title.length).toBeGreaterThan(0);
  }, 30000); // Reasonable timeout
});
