
import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


export default class AddBookButton extends Component {
    render() {
        return (
            <div>
                <Button href='/createbook'><img alt="add-book" src='../../../public/add-book.png'  ></img>  </Button>

            </div>
        )
    }
}


