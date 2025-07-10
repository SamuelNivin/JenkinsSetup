const { Builder } = require('selenium-webdriver');

describe('BStack demo test', () => {
  jest.setTimeout(100000);

  test('local test', async () => {
    const driver = await new Builder().usingServer('http://hub-cloud.browserstack.com/wd/hub').build();
    await driver.get("http://bs-local.com:45454/");
    const title = await driver.getTitle();
    expect(title).toContain('BrowserStack Local');
    await driver.quit();
  });
});
