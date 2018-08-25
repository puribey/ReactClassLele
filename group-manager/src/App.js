import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
import Users from './containers/Users';
import Groups from './containers/Groups';



class App extends Component {
  render() {
    return (
      <Router>
        <div className="wrapper">
          <div className="nav">
            <Link to="/users">Users</Link>
            <Link to="/groups">Groups</Link>
          </div>
          <div className="main">
            <Switch>
              <Route extact path="/users" component={Users}/>
              <Route extact path="/groups" component={Groups}/>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
