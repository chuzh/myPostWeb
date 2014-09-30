exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec.js'],
    capabilities: {
        browserName: 'phantomjs',
        version: '',
        platform: 'ANY'
    }
    // -----------------------------------------------------------------
    // Browser and Capabilities: Chrome
    // -----------------------------------------------------------------
    /*
    capabilities: {
        browserName: 'chrome',
        version: '',
        platform: 'ANY'
    }
    */
};