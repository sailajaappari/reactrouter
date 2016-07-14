import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute, Link, ReactRouter, browserHistory } from 'react-router'  

var UserList = React.createClass({
  render: function() {
    return (
      <ul className="user-list">
        {this.props.users.map(this.createListItem)}
      </ul>
    );
  },

  createListItem: function(user) {
    return (
      <li key={user.id}>
        <Link to="{user.id}">{user.name}</Link>
        <span>{user.active ? 'Active' : 'Not Active'}</span>
        <button onClick={this.props.toggleActive.bind(null, user.id)}>toggleActive</button>
      </li>
    );
  }
});


var UserListContainer = React.createClass({
  getInitialState: function() {
    return {
      users: []
    }
  },  

  componentDidMount: function() {
   this.state.users = [
      {id:1, name:"Jack", active: true},
      {id:2, name:"Smith", active: true},
      {id:3, name:"Jessica", active: true}    
    ];
    return this.state.users;
  },
  render: function () {
   
    return (
      <UserList users={this.state.users} toggleActive={this.toggleActive}/>
    );
  },
  
  toggleActive: function (userId) {
    var newState = Object.assign({}, this.state.users)
    var user = this.state.users.find(function (user) { 
                                       if(user.id===userId)
                                          return user;});
    user.active = !user.active
    this.setState(newState)
  }
});

var WidgetList = React.createClass({
  render: function() {
    return (
      <div><h2>Welcome to widget list</h2></div>
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



//var browserHistory = ReactRouter.browserHistory;

render(
  <Router history={browserHistory}>
    <Route path="/" component={MainLayout}>
      <Route path="home" component={Home} />
      <Route path="search" component={SearchLayout}>
        <Route path="users" component={UserListContainer} />
        <Route path="widget" component={WidgetList} />
      </Route>
    </Route>
  </Router>, 
  document.getElementById('app')
);
