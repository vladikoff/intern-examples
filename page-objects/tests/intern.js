define({
  proxyPort: 10232,
  proxyUrl: 'http://localhost:10232',
  functionalSuites: [ 'tests/functional/PageTest' ],
  environments: [ { browserName: 'firefox' }],
  excludeInstrumentation: true
});
