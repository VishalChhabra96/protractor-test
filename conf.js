exports.config = {
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    specs: ['drag-drop-spec.js'],
    // multiCapabilities: [{
    //     'browserName': 'firefox'
    //   }, {
    //     'browserName': 'chrome'
    //   }],
    capabilities: {
        'browserName': 'chrome',
        // 'chromeOptions': {
        //     'args': ['--headless']
        // }
        // 'moz:firefoxOptions': {
        //     'args': ['--headless']
        // }
    },
    onPrepare: function(){
        browser.driver.manage().window().maximize();
    },
    framework: "jasmine"
}