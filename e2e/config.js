exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    baseUrl: 'http://localhost:63342',
    specs: ['spec.js'],
    capabilities: {
        browserName: 'phantomjs',
        version: '',
        platform: 'ANY'
    },

    // -----------------------------------------------------------------
    // Browser and Capabilities: Chrome
    // -----------------------------------------------------------------
     /*
    capabilities: {
        browserName: 'chrome',
        version: '',
        platform: 'ANY'
    },*/
    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true, // Use colors in the command line report.
        isVerbose: true, // List all tests in the console
        includeStackTrace: true
    }

};