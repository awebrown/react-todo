let React = require('react'),
    TodoList = require('TodoList'),
    AddTodo = require('AddTodo'),
    TodoSearch = require('TodoSearch'),
    TodoApp = React.createClass({
      getInitialState: function() {
        showCompleted: false
        searchText: ''
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
      handleAddTodo: function(text) {
        alert('New todo: ' + text)
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
                <TodoList todos={todos}/>
                <AddTodo onAddTodo={this.handleAddTodo} />
              </div>
            </div>
          </div>
        )
      }
    });


module.exports = TodoApp;
