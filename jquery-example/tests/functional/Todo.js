define([
	'intern!object',
	'intern/chai!assert',
	'require'
], function (registerSuite, assert, require) {
	var url = '../../index.html';

	registerSuite({
		name: 'Todo (functional)',

    'check hash': function () {
      return this.remote
        .get(require.toUrl(url) + "#a=1&b=2")
        .url()
        .then(function (url) {
          assert.include(url, '#a');
        });

    }
/*
		'submit form': function () {
			return this.remote
				.get(require.toUrl(url))
				.elementById('new-todo')
				.clickElement()
				.keys('Task 1')
				.keys('\n')
				.keys('Task 2')
				.keys('\n')
				.keys('Task 3')
				.getAttribute('value')
				.then(function (val) {
					assert.ok(val.indexOf('Task 3') > -1, 'Task 3 should remain in the new todo');
				});
		}
 */
	});
});