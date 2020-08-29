import React, { Component } from 'react';
//import OpenMenu from './components/OpenMenu'
//import BookCard from './components/BookCard'
import Home from './components/Home';
import Logout from './components/auth/Logout';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';




export default class App extends Component {
  render() {
    return (
      <div>
        <Home></Home>
        <Route path="/signup" render={props => <Signup {...props} callback={this.getTheUser} />} />
        <Route path="/login" render={props => <Login {...props} callback={this.getTheUser} />} />

        <Route
          exact
          path="/logout"
          render={(props) => <Logout {...props} callback={this.getTheUser} />}
        />

      </div>
    )
  }
}
