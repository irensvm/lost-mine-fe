import React, { Component } from 'react'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'
import BookCard from './BookCard'
import OpenMenu from '../../components/OpenMenu'
import NavBar from '../Navbar'
import { Card, Navbar, CardDeck, Button } from 'react-bootstrap';
import AddBookButton from './AddBookButton'
import 'bootstrap/dist/css/bootstrap.min.css';
import FavButton from './FavButton'
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider'
import Rating from './Rating'


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
        axios.get(`${process.env.REACT_APP_API_URL}/books/`)
            .then(response => {
                this.setState({
                    books: response.data
                })
            })
    }

    handleClick(book) {
        this.setState({
            redirect: true,
            editbook:book
        })
    }

    handleRedirect = () => {
        if (this.state.redirect) {
            console.log( "reditect:", this.state.editbook)
            return <Redirect to={{pathname:"/editbook" , state:{editbook: this.state.editbook}}}/>
            
        }
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
                            <small className="text-muted">Rating:<Rating disabled="true" rating={book.rating} ></Rating></small> 
                            <></>
                            <FavButton></FavButton>
                            <Button  variant="dark" text='light' border="light" onClick={()=>this.handleClick(book)}>Edit</Button>
                        </Card.Footer>
                    </Card>

                </CardDeck>

            </div>
        ))
        return (
            <div>
                {this.handleRedirect()}
                <NavBar>
                </NavBar>
                <AddBookButton></AddBookButton>

                {books}
            </div>
        )
    }
}
