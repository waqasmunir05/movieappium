var appiumUtils = require("../../appium_helpers_ios");
const { Before, Given, When, Then, After } = require('cucumber')
var assert = require('assert');

var driver;
const commonOptions  = { timeout: 6000 * 10000 }
Before(commonOptions, async function () {
    driver = await appiumUtils.appLaunch();
    console.log('app ready');

})

Given('User on the List of Movies named {string}',commonOptions, async function (movieName) {
    let searchTabButton = await driver.$("~Search");
    await searchTabButton.click();
    let el2 = await driver.$$("//XCUIElementTypeSearchField[@name=\"Search\"]");
    await el2[0].setValue("sound of music");
    let el3 = await driver.$$("(//XCUIElementTypeStaticText[@name=\"The Sound of Music\"])");
    await el3[1].click();

});

When('Clicked on text with {string}', async function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('I should see Details with year {string}', commonOptions , async function (movieName) {
    let moviename = await driver.$$("(//XCUIElementTypeStaticText[@name=\"The Sound of Music\"])[1]");
    assert.equal(moviename,"The Sound of Music");
    return 'pending';
});
Given('I am on Featured screen of the application' ,commonOptions , async function () {
    let featuredTab = await driver.$$("//XCUIElementTypeButton[@name=\"Featured\"]");
    await featuredTab[0].click();
    let nowPlayingtab = await driver.$$("//XCUIElementTypeButton[@name=\"Now Playing\"]");
    await nowPlayingtab[0].click();
  });


  Given('I Click on Popular tab',commonOptions, async function () {
    let popularTab = await driver.$$("//XCUIElementTypeButton[@name=\"Popular\"]");
    await popularTab[0].click();
  });



  Then('system should show list of movies by popularity',commonOptions , async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });
