import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute, Link, ReactRouter, browserHistory } from 'react-router'  

var MainLayout = React.createClass({
  render: function () {
    return (
      <div className="app">
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/search">Search</Link></li>
        </ul>
        <div>{this.props.children}</div>  
      </div>
    );
  }
});

var Home = React.createClass({
  render: function() {
    return (
      <div><h2>Welcome to home page</h2></div>
    );
  }
});

var SearchLayout = React.createClass({
  render: function () {
    return (
      <div className="search">
        <ul>
          <li><Link to="/search/users" activeClassName="active">Users</Link></li>
          <li><Link to="/search/widget">Widgets</Link></li>
        </ul>
        <div className="results"> 
           {this.props.children}
        </div>
      </div>
    );
  }
});

var UserList = React.createClass({
  render: function () {
    return (
      <div>
        <ul className="user-list">
          <li>Dan</li>
          <li>Ryan</li>
          <li>Michael</li>
        </ul>
      </div>
    );
  }
});

var WidgetList = React.createClass({
  render: function() {
    return (
      <div><h2>Welcome to widget list</h2></div>
    );
  }
});

//var browserHistory = ReactRouter.browserHistory;

render(
  <Router history={browserHistory}>
    <Route path="/" component={MainLayout}>
      <Route path="home" component={Home} />
      <Route path="search" component={SearchLayout}>
        <Route path="users" component={UserList} />
        <Route path="widget" component={WidgetList} />
      </Route>
    </Route>
  </Router>, 
  document.getElementById('app')
);
