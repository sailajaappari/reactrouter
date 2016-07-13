import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'  

var MainLayout = React.createClass({
  render: function () {
    return (
      <div className="app">
        <header className="primary-header" />
        <aside className="primary-aside" />
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
});

var Home = React.createClass({
  render: function() {
    return (
      <div><h1>Welcome to home page</h1></div>
    );
  }
});

var SearchLayout = React.createClass({
  render: function () {
    return (
      <div className="search">
        <header className="search-header" />
        <div className="results"> 
           {this.props.children}
        </div>
        
        <div className="serach-footer" /> 
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

render(
  <Router history={hashHistory}>
    <Route path="/" component={MainLayout}>
      <IndexRoute component={Home} />
      <Route path="/search" component={SearchLayout}>
        <Route path="/search/users" component={UserList} />
        <Route path="/search/widget" component={WidgetList} />
      </Route>
    </Route>
  </Router>, 
  document.getElementById('app')
);
