import React, { Component } from 'react'
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';


export default class Home extends Component {
    render() {
        return (
            <div className="menu" >
                <Navbar></Navbar>
                <h1 > LOST&MINE</h1>
                <div className="links">
                    <Link to={"/signup"}><button className="btn btn-home">Signup</button></Link>
                    <Link to={"/login"}><button className="btn btn-home">Login</button></Link>
                    <Link to={"/books"}><button className="btn btn-home">books</button></Link>
                </div>

            </div>
        )
    }
}
