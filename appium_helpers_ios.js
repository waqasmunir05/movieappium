var wd = require("selenium-webdriver");
var path = require('path');

var root = process.env.PWD
var appFile = path.join(root,"apks","MovieInfo.app.zip") 

var desiredCaps = {
    platformName: "iOS",
    deviceName: "iPhone 11",
    app: appFile,
    browserName: '',
    automationName: 'XCUITest'
       
};

async function appLaunch(){
    driver = await new wd.Builder().usingServer("http://127.0.0.1:4723/wd/hub").withCapabilities(desiredCaps).build();
    return driver
}

module.exports = {
    appLaunch
}