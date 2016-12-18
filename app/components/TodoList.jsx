let React = require('react'),
    TodoAPI = require('TodoAPI'),
    {connect} = require('react-redux');

import Todo from 'Todo';

export let TodoList = React.createClass({
  render: function() {
    let {todos, showCompleted, searchText} = this.props;
    let renderTodos = () => {
      let filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

       if(filteredTodos.length === 0) {
           return <p className="container__message">Nothing To See Here</p>
       }


      return filteredTodos.map((todo) => {
        return (
          <Todo key={todo.id} {...todo} />
        )
      })
    };
    return (
      <div>{renderTodos()}</div>
    )
  }
});

export default connect(
  (state) => {
    return state;
  }
)(TodoList);
