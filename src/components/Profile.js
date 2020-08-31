import React, { Component } from 'react'
import OpenMenu from './OpenMenu'

export default class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loggedInUser: this.props.user,
            email: this.props.user.email,
          
        }
    }
    render() {
        return (
            <div>
            <OpenMenu></OpenMenu>
            <h1>{this.user.email}</h1>
                
            </div>
        )
    }
}
