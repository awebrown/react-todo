let React = require('react'),
    TodoList = require('TodoList'),
    AddTodo = require('AddTodo'),
    uuid = require('node-uuid'),
    TodoSearch = require('TodoSearch'),
    TodoApp = React.createClass({
      getInitialState: function() {
        showCompleted: false
        searchText: ''
        completed: false
        return {
          todos: [
            {
              id: uuid(),
              text: 'walk the dog',
              completed: false
            }, {
              id: uuid(),
              text: 'clean the house',
              completed: true
            }, {
              id: uuid(),
              text: 'do dishes',
              completed: true
            }, {
              id: uuid(),
              text: 'play guitat',
              completed: false
            }
          ]
        }
      },
      handleAddTodo: function(text) {
        this.setState({
          todos: [
            ...this.state.todos,
            {
              id: uuid(),
              text: text,
              completed: false
            }
          ]
        })
      },
      handleToggle: function(id) {
        let updatedTodos = this.state.todos.map((todo) => {
          if (todo.id === id) {
            todo.completed = !todo.completed;
          }
          return todo;
        })
        this.setState({todos: updatedTodos})
      },
      handleSearch: function(showCompleted, searchText) {
        this.setState({
          showCompleted: showCompleted,
          searchText: searchText.toLowerCase()
        });
      },
      render: function() {
        let {todos} = this.state;

        return (
          <div>
            <div className="row">
              <div className="column small-centered medium-6">
                <TodoSearch onSearch={this.handleSearch} />
                <TodoList todos={todos} onToggle={this.handleToggle} />
                <AddTodo onAddTodo={this.handleAddTodo} />
              </div>
            </div>
          </div>
        )
      }
    });


module.exports = TodoApp;
