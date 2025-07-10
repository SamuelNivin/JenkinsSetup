const { Builder, By, until, Capabilities } = require("selenium-webdriver");

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
    await driver.wait(until.elementLocated(By.tagName("h1")), 10000);
    const heading = await driver.findElement(By.tagName("h1")).getText();

    console.log("💬 Heading text:", heading);
    expect(heading).toContain("BrowserStack Local");
  }, 30000);
});
