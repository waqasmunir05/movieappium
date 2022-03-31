var appiumUtils = require("../../appium_helpers_ios");
const { Before, Given, When, Then, After } = require('cucumber')
var assert = require('assert');

var driver;
Before({ timeout: 6000 * 10000 }, async function () {
    driver = await appiumUtils.appLaunch();
    console.log('app ready');

})

Given('User on the List of Movies named {string}', async function (movieName) {
    let el1 = await driver.$("~Search");
    await el1.click();
    let el2 = await driver.$$("//XCUIElementTypeSearchField[@name=\"Search\"]");
    await el2[0].setValue("sound of music");
    let el3 = await driver.$$("(//XCUIElementTypeStaticText[@name=\"The Sound of Music\"])");
    await el3[1].click();
});

When('Clicked on text with {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('I should see Details with year {string}', function (movieName) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});
