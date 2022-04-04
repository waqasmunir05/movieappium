var appiumUtils = require("../../appium_helpers_ios");
const { Before, Given, When, Then, After } = require('cucumber')
var assert = require('assert');

var driver;
const commonOptions  = { timeout: 6000 * 10000 }
Before(commonOptions, async function () {
    driver = await appiumUtils.appLaunch();
   // console.log('app ready');

})

Given('I am on Search Screen',commonOptions, async function () {
    let searchTabButton = await driver.$("~Search");
    await searchTabButton.click();
 
    //let el3 = await driver.$$("(//XCUIElementTypeStaticText[@name=\"The Sound of Music\"])");
   // await el3[1].click();

});

When ('I enter movie name {string}', async function (movieName) {
    // Write code here that turns the phrase above into concrete actions
    // return 'pending';
    let el2 = await driver.$$("//XCUIElementTypeSearchField[@name=\"Search\"]");
    await el2[0].setValue(movieName);
});

Then('I should see Details with year {string} with exact Date {string}', commonOptions , async function (movieDate, exactDate) {
    await driver.pause(5000)
    //let dateElements = await driver.$$("//XCUIElementTypeStaticText[starts-with(@name,\""+movieDate+"\")]");
    let dateElements = await driver.$$("//XCUIElementTypeStaticText[starts-with(@name, \"1965\")]");
    assert.equal(dateElements.length >= 1, true);
    const first = dateElements[0];
    const value = await first.getValue();
    //consosle.log(value);
    assert.equal(value, exactDate)
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
    // return 'pending';
  });
