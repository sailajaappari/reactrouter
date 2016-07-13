import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'  

var Home = React.createClass({
  render: function () {
    return (
      <h1>Welcome to home page</h1>
    );
  }
});

var Users = React.createClass({
  render: function () {
    return (
      <h2>Welcome to users page</h2>
    );
  }
});

var Widgets = React.createClass({
  render: function () {
    return (
      <h2>Welcome to widgets page</h2>
    );
  }
});

render(
  <Router history={hashHistory}>
    <Route path="/" component={Home} />
    <Route path="/users" component={Users} />
    <Route path="/widgets" component={Widgets} />
  </Router>, 
  document.getElementById('app')
);
