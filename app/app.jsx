let React = require('react'),
    ReactDOM = require('react-dom'),
    TodoApp = require('TodoApp'),
    {Provider} = require('react-redux'),
    {Route, Router, IndexRoute, hashHistory} = require('react-router');


let actions = require('actions');
let store = require('configureStore').configure();


store.subscribe(() => {
  console.log('New State: ', store.getState());
});

store.dispatch(actions.addTodo('clean the yard'));
store.dispatch(actions.setSearchText('yard'));
store.dispatch(actions.toggleShowCompleted());

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
