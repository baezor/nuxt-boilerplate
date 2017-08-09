// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'logo e2e test': function test(browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL;

    browser
        .url(devServer)
        .waitForElementVisible('.logo', 5000)
        .assert.containsText('.logo', 'Testing Logo content')
        .end();
  },
};
