let React = require('react'),
    ReactDOM = require('react-dom'),
    expect = require('expect'),
    $ = require('jQuery'),
    TestUtils = require('react-addons-test-utils'),
    TodoList = require('TodoList'),
    Todo = require('Todo');

    describe('TodoList', () => {
      it('should exist', () => {
        expect(TodoList).toExist();
      });

      it('should render one todo component for each todo item', () => {
        let todos = [{
          id: 1,
          text: 'Do something'
        }, {
          id: 2,
          text: 'Check mail'
        }];
        let todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
        let todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

        expect(todosComponents.length).toBe(todos.length);
      })
    });
