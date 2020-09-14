import React, { Component } from 'react';
import ProtectedRoute from './auth/protected-route';
import AnonymousRoute from './auth/anonymous-route'
import Home from './components/Home';
import Logout from './components/auth/Logout';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import Profile from './components/profile/Profile';
import EditProfile from './components/profile/EditProfile';
import AddBook from './components/book/AddBook';
import { Switch, Route } from 'react-router-dom';
import myBooks from './components/book/myBooks';
import EditBook from './components/book/EditBook';
import Books from './components/book/Books';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedInUser: JSON.parse(localStorage.getItem('loggedInUser')) || null,
    }
  }
  getTheUser = (userObject) => {
    this.setState({
      loggedInUser: userObject
    }, () => {
      localStorage.setItem('loggedInUser', JSON.stringify(this.state.loggedInUser))
    })
  }
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/books" render={() => <Books />} />
          <Route exact path="/signup" render={(props) => <Signup  callback={this.getTheUser}/>} />
          <Route exact path="/login" render={(props) => <Login {...props} callback={this.getTheUser} />} />
          <Route exact path="/logout" render={(props) => <Logout {...props} callback={this.getTheUser} />}
          />
        
        <ProtectedRoute
            path="/profile"
            user={this.state.loggedInUser}
            component={Profile}
          />
          <ProtectedRoute
            path="/mybooks"
            user={this.state.loggedInUser}
            component={myBooks}
          />
          <ProtectedRoute
            path="/createbook"
            user={this.state.loggedInUser}
            component={AddBook}
          />
          <ProtectedRoute
            path="/editbook"
            user={this.state.loggedInUser}
            component={EditBook}
          />
          <ProtectedRoute
            path="/editprofile"
            key={this.state.loggedInUser} 
            user={this.state.loggedInUser}
            component={EditProfile}
          />

        </Switch>


      </div>
    )
  }
}
