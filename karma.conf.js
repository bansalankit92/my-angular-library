// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '..',
    frameworks: ['jasmine', '@angular/cli'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-remap-istanbul'),
      require('@angular/cli/plugins/karma'),
      require('karma-jasmine-html-reporter'),
      'karma-coverage-istanbul-reporter',
    ],
     client:{
      clearContext: false, // leave Jasmine Spec Runner output visible in browser
       captureConsole: true
    },
    mime: {
      'text/x-typescript': ['ts','tsx']
    },
    coverageIstanbulReporter: {
          dir: require('path').join(__dirname, 'coverage'),
          reports: [ 'html', 'lcovonly', 'cobertura' ],
          fixWebpackSourcePaths: true,
        },
    angularCli: {
      environment: 'dev'
    },
    reporters: ['progress','coverage-istanbul'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeHeadless'],
    singleRun: false,
    browserNoActivityTimeout: 10*1000
  });
};
