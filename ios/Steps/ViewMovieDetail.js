var appiumUtils = require("../../appium_helpers_ios");
var wd = require("selenium-webdriver");
const By = wd.By;
const until = wd.until;
const { Before, Given, When, Then, After } = require('cucumber')
var assert = require('assert');

var driver;
Before({ timeout: 6000 * 10000 }, async function () {
    driver = await appiumUtils.appLaunch();
    console.log('app ready' );
  
})

Given('User on the List of Movies named {string}', async function (movieName) {
    let el1 = driver.element("~Search");
el1.click();
let el2 = driver.element("//XCUIElementTypeSearchField[@name=\"Search\"]");
el2.setValue("sound of music");
let el3 = driver.element("(//XCUIElementTypeStaticText[@name=\"The Sound of Music\"])[1]");
el3.click();
el3.click();
let el4 = driver.element("~In the years before the Second World War, a tomboyish postulant at an Austrian abbey becomes a governess in the home of a widowed naval captain with seven children, and brings a new love of life and music into the home.");
el4.click();
let el5 = driver.element("//XCUIElementTypeApplication[@name=\"MovieInfo\"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeTable/XCUIElementTypeCell[1]");
el5.click();
});

When('Clicked on text with {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('I should see Details with year {string}', function (movieName) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});
