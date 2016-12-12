let React = require('react'),
    uuid = require('node-uuid'),
    moment = require('moment');

import TodoSearch from 'TodoSearch';
import AddTodo from 'AddTodo';
import TodoList from 'TodoList';

let TodoApp = React.createClass({
  render: function() {
    return (
      <div>
        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch />
              <TodoList />
              <AddTodo />
            </div>
          </div>
        </div>
      </div>
     )
   }
});

module.exports = TodoApp;
