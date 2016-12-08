let React = require('react'),
    TodoList = require('TodoList'),
    TodoApp = React.createClass({
      getInitialState: function() {
        return {
          todos: [
            {
              id: 1,
              text: 'walk the dog'
            }, {
              id: 2,
              text: 'clean the house'
            }, {
              id: 3,
              text: 'do dishes'
            }, {
              id: 4,
              text: 'play guitat'
            }
          ]
        }
      },
      render: function() {
        let {todos} = this.state;

        return (
          <TodoList todos={todos}/>
        )
      }
    })


module.exports = TodoApp;
