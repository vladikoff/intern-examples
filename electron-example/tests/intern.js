console.log(process.cwd())
define({
  environments: [ { browserName: 'chrome' } ],
  capabilities: {
    chromeOptions: {
      binary: process.cwd() + '/node_modules/electron-prebuilt/dist/Electron.app/Contents/MacOS/Electron'
    }
  },
  tunnelOptions: {
    //port: 9515
  },
  functionalSuites: [ 'tests/functional/Example' ],
  excludeInstrumentation: true
});
