const { join } = require('path');
const browserstack = require('browserstack-local');
const { env } = require('./settings')

const localIdentifier = `Mindsay_${Math.round(Math.random() * 100)}_${Date.now()}}`

exports.config = {
  user: env.bsUser,
  key: env.bsKey,
  updateJob: false,
  services: [
    ['image-comparison',
      // The options
      {
        // Some options, see the docs for more
        baselineFolder: join(process.cwd(), './baseline/'),
        formatImageName: '{tag}-{logName}-{width}x{height}',
        screenshotPath: join(process.cwd(), '.tmp/'),
        savePerInstance: true,
        autoSaveBaseline: true,
        blockOutStatusBar: true,
        blockOutToolBar: true,
        // ... more options
      }],
  ],
  specs: [
    './test/specs/**/*.js'
  ],
  exclude: [],
  capabilities: [{
    browser: 'chrome',
    name: 'local_test',
    build: 'webdriver-browserstack',
    'browserstack.local': true,
    'browserstack.localIdentifier': localIdentifier,
  }],
  logLevel: env.logLevel,
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: env.baseUrl,
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  framework: 'jasmine',
  jasmineNodeOpts: {
    defaultTimeoutInterval: 100000,
    expectationResultHandler: (passed, assertion) => {
      // do something
    }
  },

  before: (capabilities, specs) => {
    require('babel-register')
  },

  // Code to start browserstack local before start of test
  onPrepare: (config, capabilities) => {
    console.log('Connecting local');
    return new Promise((resolve, reject) => {
      exports.bs_local = new browserstack.Local();
      exports.bs_local.start({localIdentifier, 'key': exports.config.key }, (error) => {
        if (error) return reject(error);
        console.log('Connected. Now testing...');

        resolve();
      });
    });
  },

  // Code to stop browserstack local after end of test
  onComplete: (capabilties, specs) => {
    exports.bs_local.stop(() => ({}))
  }
}
