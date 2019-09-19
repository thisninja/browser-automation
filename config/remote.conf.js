const https = require('https')
const { env, log, remoteCapabilities } = require('./settings')

exports.config = {
  maxInstances: 1,
  capabilities: remoteCapabilities,
  user: env.bsUser,
  key: env.bsKey,
  specs: [
    './test/specs/**/*.js'
  ],
  exclude: [
    // 'path/to/excluded/files'
  ],
  sync: true,
  logLevel: env.logLevel,
  coloredLogs: true,
  bail: 1,
  screenshotPath: './errorShots/',
  baseUrl: env.baseUrl,
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  services: [
    'browserstack',
  ],
  framework: 'jasmine',
  reporters: ['spec'],
  jasmineNodeOpts: {
    defaultTimeoutInterval: 100000,
    expectationResultHandler:(passed, assertion) => {
      // do something
    }
  },
  onPrepare: (config, capabilities) => {
    log('config:', JSON.stringify(config))
    log('capabilities:', JSON.stringify(capabilities))
  },
  beforeSession: (config, capabilities, specs) => {
    // do something
  },
  before: (capabilities, specs) => {
    require('babel-register')
    log('Session running at:')
    log(JSON.stringify(capabilities))
    log(`https://www.browserstack.com/automate/builds/${env.buildId}/sessions/${browser.sessionId}`)
  },
  beforeSuite: (suite) => {
  },
  beforeHook: () => {
  },
  afterHook: () => {
  },
  beforeTest: (test) => {
  },
  beforeCommand: (commandName, args) => {
  },
  afterCommand: (commandName, args, result, error) => {
  },
  afterTest: (test) => {
  },
  afterSuite: (suite) => {
  },
  after: (result, capabilities, specs) => {
  },
  afterSession: (config, capabilities, specs) => {
  },
  onComplete:(exitCode) => {
  }
}
