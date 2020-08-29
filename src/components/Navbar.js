import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import GoogleBtn from './/GoogleBtn'


class Navbar extends Component {

    render() {

        let authLink = (
            <>
                <li className="nav-item">
                    <NavLink to="/signup" className="nav-link">Signup</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/login" className="nav-link"><GoogleBtn/></NavLink>
                </li>
            </>
        )

        if (this.props.user) {
            console.log("logged user", this.props.user)
            authLink = (
                <li className="nav-item">
                    <NavLink to="/logout" className="nav-link"> {this.props.user.username}=> logout</NavLink>
                </li>
            )
        }

        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink to="/" className="nav-link">Home</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link"> Books </NavLink>
                        </li>
                        

                        {authLink}

                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar