var appiumUtils = require("../../appium_helpers");
var wd = require("selenium-webdriver");
const By = wd.By;
const until = wd.until;
const { Before, Given, When, Then, After } = require('cucumber')
var assert = require('assert');

var driver;
Before({ timeout: 6000 * 10000 }, async function () {
    driver = await appiumUtils.appLaunch();
    console.log('app ready' + driver);
    let searchBar = await driver.findElement(By.id("com.insiderser.android.movies:id/search_bar_text"));

})

Given('User on the List of Movies named {string}', async function (movieName) {
    console.log("driver is ", driver)
    let searchBar = await driver.findElement(By.id("com.insiderser.android.movies:id/search_bar_text"));
    await searchBar.click();
    await searchBar.sendKeys(movieName);
    await driver.longPressKeyCode(66, undefined, undefined);

});

When('Clicked on text with {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('I should see Details with year {string}', function (movieName) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});