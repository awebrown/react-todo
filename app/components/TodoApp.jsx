let React = require('react'),
    TodoList = require('TodoList'),
    AddTodo = require('AddTodo'),
    uuid = require('node-uuid'),
    TodoSearch = require('TodoSearch'),
    TodoApp = React.createClass({
      getInitialState: function() {
        showCompleted: false
        searchText: ''
        return {
          todos: [
            {
              id: uuid(),
              text: 'walk the dog'
            }, {
              id: uuid(),
              text: 'clean the house'
            }, {
              id: uuid(),
              text: 'do dishes'
            }, {
              id: uuid(),
              text: 'play guitat'
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
              text: text
            }
          ]
        })
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
                <TodoList todos={todos} />
                <AddTodo onAddTodo={this.handleAddTodo} />
              </div>
            </div>
          </div>
        )
      }
    });


module.exports = TodoApp;
