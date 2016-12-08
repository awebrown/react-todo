let React = require('react'),
    ReactDom = require('react-dom'),
    expect = require('expect'),
    $ = require('jQuery'),
    TestUtils = require('react-addons-test-utils'),
    TodoApp = require('TodoApp');  

    describe('TodoApp', () => {
      it('should exist', () => {
        expect(TodoApp).toExist();
      });
    });
