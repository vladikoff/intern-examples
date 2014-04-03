define([
  './intern'
], function (intern) {

  intern.useSauceConnect = false;

  intern.environments = [
    { browserName: 'firefox' }
  ];

  return intern;
});
