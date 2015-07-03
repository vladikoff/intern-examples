define(function (require) {
  var test = require('intern!object');
  var assert = require('intern/chai!assert');
  var Page = require('../commands/Page');

  return test(function () {
    var page;

    return {
      name: 'Page test',

      before: function () {
        page = new Page(this.remote);
        console.log(page);

        page.setFindTimeout(1000);
      },

      beforeEach: function () {
        // ensure a fresh page each time
        return page.refresh().navigate();
      },

      'loads app and clicks a button': function () {
        return page.then(function () {

        });
      }
    };
  });
});
