
import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

export default class AddBookButton extends Component {
    render() {
        return (
            <div>
                <Button href='/createbook'><img src='/public/book (1).png'  ></img>  </Button>
            </div>
        )
    }
}
