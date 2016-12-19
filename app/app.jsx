let React = require('react'),
    ReactDOM = require('react-dom'),
    {Provider} = require('react-redux'),
    {hashHistory} = require('react-router'),
    actions = require('actions'),
    store = require('configureStore').configure();

import firebase from 'app/firebase/';
import router from 'app/router/';

firebase.auth().onAuthStateChanged((user) => {
  if(user) {
    store.dispatch(actions.login(user.uid));
    hashHistory.push('/todoapp');
  } else {
    store.dispatch(actions.logout());
    hashHistory.push('/');
  }
});
// import './../playground/firebase/Index';

// store.subscribe(() => {
//   let state = store.getState();
//   console.log('New State: ', store.getState());
//   TodoAPI.setTodos(state.todos);
// });

// let initialTodos = TodoAPI.getTodos();
// store.dispatch(actions.addTodos(initialTodos));
store.dispatch(actions.startAddTodos());
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
    {router}
  </Provider>,
  document.getElementById('app')
);
