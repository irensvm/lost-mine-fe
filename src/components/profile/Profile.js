import React, { Component } from 'react'
import OpenMenu from '../OpenMenu'
import MyBooks from '../book/myBooks'
import BookList from '../book/BookList'
import NavBar from '../NavBar'
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
            <NavBar></NavBar>       
            <h1>{this.state.email}</h1>
            <Button href="/editprofile">Edit profile</Button>
            <Button href="/mybooks">My books</Button>
                
            </div>
        )
    }
}
