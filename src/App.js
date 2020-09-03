import React, { Component } from 'react';
//import OpenMenu from './components/OpenMenu'
//import BookCard from './components/BookCard'
import Home from './components/Home';
import Logout from './components/auth/Logout';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import Profile from './components/Profile';
import AddBook from './components/book/AddBook';
//import BookList from './components/book/BookList'
import { Switch, Route } from 'react-router-dom';
//import BookCard from './components/book/BookCard';




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
          <Route path="/books" render={props => <AddBook {...props}  />   } />


                     
          <Route path="/signup" render={props => <Signup {...props} callback={this.getTheUser} />} />
          <Route path="/login" render={props => <Login {...props} callback={this.getTheUser} />} />

          <Route
            exact
            path="/logout"
            render={(props) => <Logout {...props} callback={this.getTheUser} />}
          />
          <Route path="/profile" render={props => <Profile {...props} user={this.state.loggedInUser} getUser={this.getTheUser} />} />

        </Switch>


      </div>
    )
  }
}
