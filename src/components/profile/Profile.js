import React, { Component } from 'react'
import OpenMenu from '../OpenMenu'
import BookList from '../book/BookList'
import { Button } from 'react-bootstrap'



export default class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loggedInUser: this.props.user,
            
          
        }
    }
    render() {
        return (
            <div>
            <OpenMenu></OpenMenu>
            <BookList></BookList>
            <h1>{this.state.email}</h1>
            <input>Edit profile</input>
                
            </div>
        )
    }
}
