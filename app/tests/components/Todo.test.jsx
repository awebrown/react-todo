let React = require('react'),
    ReactDOM = require('react-dom'),
    expect = require('expect'),
    $ = require('jQuery'),
    TestUtils = require('react-addons-test-utils'),
    Todo = require('Todo');

    describe('Todo', () => {
      it('should exist', () => {
        expect(Todo).toExist();
      });

      it('should call onToggle prop with id onClick', () => {
        let todoData = {
          id: 199,
          text: 'test features',
          completed: true
        };
        let spy = expect.createSpy();
        let todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy}/>)
        let $el = $(ReactDOM.findDOMNode(todo));

        TestUtils.Simulate.click($el[0]);
        expect(spy).toHaveBeenCalledWith(199);
      });
    });
