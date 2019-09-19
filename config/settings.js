const isRemote = env => (env === 'remote')
const envFile = require('dotenv').config();

if (envFile.error) {
  throw envFile.error
}

const localUrl = 'http://localhost:3000';

const token = envFile.parsed.TOKEN;
const env = envFile.parsed.ENV;
const productionUrl = `https://generic-widget.mindsay.com/?token=${token}&environment=${env}`
// example 'https://generic-widget.mindsay.com/?token=MoLd-S8NEBStl8mL8AVilg20190311140503&environment=staging'
const bsEnv = envFile.parsed.BS_ENV || 'remote';
const bsUser = envFile.parsed.BS_USER || 'BS_USER';
const bsKey = envFile.parsed.BS_KEY || 'BS_KEY';
const debugEnabled = envFile.parsed.DEBUG === 'true';
const baseUrl = isRemote(bsEnv) ? productionUrl : localUrl;
const logLevel = envFile.parsed.LOG_LEVEL || 'silent';
const buildId = 'your_build_id_from_browserstack';

const commonCapabilities = (config) => {
  return config.map((capability) => {
    return Object.assign(capability, {
      'browserstack.debug': debugEnabled,
      'browserstack.video': debugEnabled,
      'browserstack.customSendKeys': 800,
    });
  });
}

const remoteCapabilities = commonCapabilities([
  {
    platform: 'WINDOWS',
    browserName: 'Firefox',
    browser_version: '45',
    resolution: '1600x1200',
  },
])

const isVerbose = (/verbose/i).test(logLevel);

function log () {
  if (isVerbose) {
    console.log.apply(console, arguments);
  }
}

exports.commonCapabilities = commonCapabilities;
exports.remoteCapabilities = remoteCapabilities;

exports.log = log;

exports.env = {
  localUrl,
  productionUrl,
  bsEnv,
  bsUser,
  bsKey,
  baseUrl,
  logLevel,
  buildId,
};
