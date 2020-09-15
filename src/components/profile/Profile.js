import React, { Component } from 'react'
import OpenMenu from '../OpenMenu'
import MyBooks from '../book/myBooks'
import BookList from '../book/BookList'
import NavBar from '../NavBar'
import { Button } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'

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
                <Button className="btn btn-dark" href="/editprofile">Edit profile</Button>
                <Button className="btn btn-dark" href="/mybooks">My books</Button>

            </div>
        )
    }
}
