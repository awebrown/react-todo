let React = require('react'),
    ReactDOM = require('react-dom'),
    expect = require('expect'),
    $ = require('jQuery'),
    TestUtils = require('react-addons-test-utils'),
    {AddTodo} = require('AddTodo');

import * as actions from 'actions';

    describe('AddTodo', () => {
      it('should exist', () => {
        expect(AddTodo).toExist();
      });

      it('should dispatch when ADD_TODO when valid todo text', () => {
        let todoText = 'Check mail';
        let action = actions.startAddTodo(todoText);

        let spy = expect.createSpy();
        let addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy} />);
        let $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.todoText.value = todoText;
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(action);
      });

      it('should not dispatch ADD_TODO when invalid todo text', () => {
        let todoText = '';
        let spy = expect.createSpy();
        let addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy} />);
        let $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.todoText.value = todoText;
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
      });
    });
