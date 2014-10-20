exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    baseUrl: 'http://localhost:63342',
    specs: ['spec.js'],
    capabilities: {
        browserName: 'phantomjs',
        'phantomjs.binary.path': './node_modules/karma-phantomjs-launcher/node_modules/phantomjs/bin/phantomjs'
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
    singleRun: true,
    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true, // Use colors in the command line report.
        isVerbose: true, // List all tests in the console
        includeStackTrace: true
    }

};