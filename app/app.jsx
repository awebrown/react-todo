'use strict';

let React = require('react'),
    ReactDOM = require('react-dom'),
    TodoApp = require('TodoApp'),
    {Route, Router, IndexRoute, hashHistory} = require('react-router');

//style!css! are chained loaders, look in webpack.config.js
//load Foundation
$(document).foundation();
//App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <TodoApp />,
  document.getElementById('app')
);
