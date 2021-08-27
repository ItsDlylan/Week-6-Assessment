import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
    await driver.sleep(2000);
    driver.navigate().refresh();
    

});

test('Clicking the top left square adds an X to the square.', async () => {
    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
    let topleft = await (await driver).findElement(By.id('cell-0'))
    await topleft.click()
    await driver.sleep(2000);
    driver.navigate().refresh();
    
})

test('Clicking the top right square adds an X to the square.', async () => {
    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
    let topleft = await (await driver).findElement(By.id('cell-3'))
    await topleft.click()
    await driver.sleep(2000);
    driver.navigate().refresh();
    
})

test('Clicking the bottom left square adds an X to the square.', async () => {
    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
    let topleft = await (await driver).findElement(By.id('cell-8'))
    await topleft.click()
    await driver.sleep(2000);
    driver.navigate().refresh();
   
})


test('start the game and click any square but the top left to make sure the bot clicks the top left on first round.', async () => {
    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
    let topleft = await (await driver).findElement(By.id('cell-8'))
    await topleft.click()

    let botsAnswer = await(await driver).findElement(By.id('cell-0')).getText()
    expect(botsAnswer).toBe('O');
    await driver.sleep(2000);
    driver.navigate().refresh();
   
})
