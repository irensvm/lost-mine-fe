import React, { Component } from 'react'
import NavBar from './NavBar';
import Books from '../components/book/Books';

import { Link } from 'react-router-dom';


export default class Home extends Component {
    render() {
        return (
            <div className="menu" >
                <NavBar></NavBar>
                <h1></h1>
                <Books></Books>
                

            </div>
        )
    }
}
