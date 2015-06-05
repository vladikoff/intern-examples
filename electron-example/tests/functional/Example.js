define([
  'intern!object',
  'intern/chai!assert',
  'require'
], function (registerSuite, assert, require) {
  var url = 'file://app.html';

  registerSuite({
    name: 'application loads',

    'gets to main application view': function () {
      var remote = this.remote;

      return remote
        .setFindTimeout(90000)
        .get(url)
        .getCurrentUrl()
        .then(function (url) {
          console.log(url);
        })
        .findByCssSelector('#header')
        .getVisibleText()
        .then(function (text) {
          assert.equal(text, "Hello World!");
        })
        .end()
        .then(function () {
          var steps = Array.apply(null, {length: 5}).map(Number.call, Number)
          return steps.reduce(function (remote) {
            return remote
              .findByCssSelector("#click")
              .click()
              .end()
              .sleep(500)
          }, remote);
        })
        .findByCssSelector('#header')
        .getVisibleText()
        .then(function (text) {
          assert.equal(text, "5");
        })
        .end();
    }
  });
});