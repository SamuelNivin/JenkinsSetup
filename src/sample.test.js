const { Builder, By } = require('selenium-webdriver');

describe('BStack demo test', () => {
  jest.setTimeout(100000);

  test('login test', async () => {
    let driver = await new Builder().usingServer('http://hub-cloud.browserstack.com/wd/hub').build();
    await driver.get('https://www.saucedemo.com');
    await driver.findElement(By.id('user-name')).sendKeys('standard_user');
    await driver.findElement(By.id('password')).sendKeys('secret_sauce');
    await driver.findElement(By.id('login-button')).click();
    await driver.quit();
  });

  test('add products to cart', async () => {
    let driver = await new Builder().usingServer('http://hub-cloud.browserstack.com/wd/hub').build();
    await driver.get('https://www.saucedemo.com');
    await driver.findElement(By.id('user-name')).sendKeys('standard_user');
    await driver.findElement(By.id('password')).sendKeys('secret_sauce');
    await driver.findElement(By.id('login-button')).click();
    await driver.findElement(By.css('.inventory_item button')).click();
    await driver.quit();
  });
});
