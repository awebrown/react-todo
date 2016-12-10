let React = require('react'),
    ReactDOM = require('react-dom'),
    expect = require('expect'),
    $ = require('jQuery'),
    TestUtils = require('react-addons-test-utils'),
    TodoApp = require('TodoApp');

    describe('TodoApp', () => {
      it('should exist', () => {
        expect(TodoApp).toExist();
      });

      it('should add todo to the todos state on handleAddTodo',() => {
        let todoText = 'test text';
        let todoApp = TestUtils.renderIntoDocument(<TodoApp />);

        todoApp.setState({ todos: [] });
        todoApp.handleAddTodo(todoText);

        expect(todoApp.state.todos[0].text).toBe(todoText);
      });

      it('should toggle completed value when handleToggle called', () => {
        let todoData = {
          id: 11,
          text: 'test features',
          completed: false
        };
        let todoApp = TestUtils.renderIntoDocument(<TodoApp />);
        todoApp.setState({todos: [todoData]});

        expect(todoApp.state.todos[0].completed).toBe(false);
        todoApp.handleToggle(11);
        expect(todoApp.state.todos[0].completed).toBe(true);
      });
    });
