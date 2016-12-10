let React = require('react'),
    Todo = require('Todo'),
    TodoList = React.createClass({
      render: function() {
        let {todos} = this.props;
        let renderTodos = () => {
          if(todos.length === 0) {
            return (
              <p className="container__message">Nothing To Do</p>
            );
          }
          return todos.map((todo) => {
            return (
              <Todo key={todo.id} {...todo} onToggle={this.props.onToggle} />
            )
          })
        };
        return (
          <div>{renderTodos()}</div>
        )
      }
    })


module.exports = TodoList;
