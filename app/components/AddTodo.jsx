let React = require('react'),
    AddTodo = React.createClass({
      onSubmit: function(e) {
        e.preventDefault();

        let todoText = this.refs.todoText.value;

        if(todoText.length > 0) {
          this.refs.todoText.value = '';
          this.props.onAddTodo(todoText);
        } else {
          this.refs.todoText.focus();
        }
      },
      render: function() {
        return (
          <div>
            <form ref="form" onSubmit={this.onSubmit} className="todo-form">
              <input type="text" ref="todoText" className="expanded" placeholder="What do you need to do?"/>
              <button className="button primary expanded">Add Todo</button>
            </form>
          </div>
        )
      }
    });

module.exports = AddTodo;
