var wd = require("selenium-webdriver");
var path = require('path');

var root = path.dirname(require.main.filename)
var apkFile = path.join(root,"apks","movies.apk") 


var desiredCaps = {
    platformName: "Android",
    app: apkFile,
    appPackage: "com.insiderser.android.movies",
    browserName: '',
       
};

async function appLaunch(){
    driver = await new wd.Builder().usingServer("http://127.0.0.1:4723/wd/hub").withCapabilities(desiredCaps).build();
}
appLaunch();