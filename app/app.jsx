let React = require('react'),
    ReactDOM = require('react-dom'),
    {Provider} = require('react-redux'),
    {Route, Router, IndexRoute, hashHistory} = require('react-router'),
    actions = require('actions'),
    store = require('configureStore').configure(),
    TodoAPI = require('TodoAPI');

import TodoApp from 'TodoApp';

store.subscribe(() => {
  let state = store.getState();
  console.log('New State: ', store.getState());
  TodoAPI.setTodos(state.todos);
});

let initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));

// store.dispatch(actions.addTodo('clean the yard'));
// store.dispatch(actions.setSearchText('yard'));
// store.dispatch(actions.toggleShowCompleted());

//style!css! are chained loaders, look in webpack.config.js
//load Foundation
$(document).foundation();
//App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('app')
);
