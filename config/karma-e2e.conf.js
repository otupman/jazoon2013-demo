basePath = '../';
files = [
  ANGULAR_SCENARIO,
  ANGULAR_SCENARIO_ADAPTER,
  'test/e2e/**/*.js',
];
reporters      = ['progress'];
port           = 8091;
runnerPort     = 9100;
colors         = true;
logLevel       = LOG_INFO;
autoWatch      = true;
browsers       = [];
captureTimeout = 5000;
singleRun      = false;
urlRoot        = '/__karma/';
proxies = { '/':'http://localhost:8000/' };