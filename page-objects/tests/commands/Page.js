define(function (require) {
  var node = 'intern/node_modules/dojo/node!';
  var Command = require(node + 'leadfoot/Command');

  var SELECTORS = {
      completed: '.status.completed',
      completedOption: 'option[value*="completed"]',
      dashboard: 'li.dashboard > a',
      dialog: '.dialog',
      message: '.activity a',
      need: '.active',
      publish: '.button.publish'
  };

  var proto = Object.create(Command.prototype, {
      dashboard: {
        get: function () {
          return this.findByCssSelector(SELECTORS.dashboard);
        }
      },
      need: {
        get: function () {
          return this.findByCssSelector(SELECTORS.need);
        }
      },
      edit: {
        get: function () {
          return this.findByLinkText('Edit');
        }
      },
      delete: {
        get: function () {
          return this.findByLinkText('Delete');
        }
      },
      publish: {
        get: function () {
          return this.findByCssSelector(SELECTORS.publish);
        }
      },
      message: {
        get: function () {
          return this.findByCssSelector(SELECTORS.message);
        }
      },
      dialog: {
        get: function () {
          return this.findByCssSelector(SELECTORS.dialog);
        }
      },
      checkbox: {
        get: function () {
          return this.findByName('checked');
        }
      },
      checkboxes: {
        get: function () {
          return this.findAllByName('checked');
        }
      },
      progressSelect: {
        get: function () {
          return this.findByName('progress');
        }
      },
      statusSelect: {
        get: function () {
          return this.findByName('status');
        }
      },
      completedOption: {
        get: function () {
          return this.findByCssSelector(SELECTORS.completedOption);
        }
      },
      completed: {
        get: function () {
          return this.findByCssSelector(SELECTORS.completed);
        }
      }
    });



  function Page() {
    function myCommand() {
      return Command.apply(this, arguments);
    }

    var proto = myCommand.prototype = Object.create(Command.prototype, {});
    proto.constructor = myCommand;

    return myCommand.apply(this, arguments);
  }

  proto.constructor = Page;

  proto.navigate = function (href, preventFakeAuth) {
    return this._navigate('/page', preventFakeAuth)
      .end();
  };

  return Page;
});
