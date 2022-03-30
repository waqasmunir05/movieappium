var wd = require("selenium-webdriver");
var path = require('path');

var root = process.env.PWD
var apkFile = path.join(root,"apks","movies.apk") 


var desiredCaps = {
    platformName: "Android",
    app: apkFile,
    appPackage: "com.insiderser.android.movies",
    browserName: '',
    automationName: 'uiautomator2'
       
};

async function appLaunch(){
    driver = await new wd.Builder().usingServer("http://127.0.0.1:4723/wd/hub").withCapabilities(desiredCaps).build();
    return driver
}

module.exports = {
    appLaunch
}