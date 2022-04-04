const wdio = require('webdriverio');
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
    const driver = await wdio.remote({
        protocol: "http",
        host: "127.0.0.1",
        port: 4723,
        path: "/wd/hub",
        capabilities: desiredCaps,
        desiredCapabilities: desiredCaps,
        logLevel: "warn"
      });
     // driver =  driver.init();
    return driver
}

module.exports = {
    appLaunch
}