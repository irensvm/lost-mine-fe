import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import BookCard from './BookCard'
import OpenMenu from '../../components/OpenMenu'
import NavBar from '../NavBar'
import { Card, Navbar, CardDeck, Button } from 'react-bootstrap';
import AddBookButton from './AddBookButton'
import 'bootstrap/dist/css/bootstrap.min.css';
import FavButton from './FavButton'



export default class myBooks extends Component {
    constructor(props) {
        super(props)
        this.state = {
            books: [],
            //user: session.user.current_id
        }
    }
    componentDidMount() {
        this.getAllBooks()
    }
    getAllBooks() {
        axios.get("http://localhost:3000/api/books/")
            .then(response => {
                this.setState({
                    books: response.data
                })
            })
    }
    render() {
        const books = this.state.books.map(book => (
            <div key={book._id}>
                <CardDeck>
                <Card bg="dark" text='light' border="light" className="book-card" >
                    <Card.Title>Title:{book.title}</Card.Title>
                    <Card.Text>Review:{book.opinion}</Card.Text>                    
                    <Card.Text>Lented to:{book.lented}</Card.Text>
                    <Card.Footer>
                        <small className="text-muted">Rating:</small> {book.rating}
                        <FavButton></FavButton>
                        <i class="far fa-edit"></i>
                    </Card.Footer>
                </Card>

                </CardDeck>

            </div>
        ))
        return (
            <div>
            <NavBar>                
            </NavBar>
            <AddBookButton></AddBookButton>
            
            {books}
            </div>
        )
    }
}
