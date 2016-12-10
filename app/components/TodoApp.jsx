let React = require('react'),
    uuid = require('node-uuid'),

    TodoList = require('TodoList'),
    AddTodo = require('AddTodo'),
    TodoSearch = require('TodoSearch'),
    TodoAPI = require('TodoAPI'),

    TodoApp = React.createClass({
      getInitialState: function() {
        return {
          showCompleted: false,
          searchText: '',
          todos: TodoAPI.getTodos()
        };
      },
      componentDidUpdate: function() {
        TodoAPI.setTodos(this.state.todos);
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
