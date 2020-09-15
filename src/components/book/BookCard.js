import React, { Component } from 'react'
import { Card, CardGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import FavButton from './FavButton'
import Rating from 'react-rating';
import axios from 'axios'


export default class BookCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            books: [],
            // user: session.user.current_id
        }
    }
    componentDidMount() {
        this.getAllBooks()
    }
    getAllBooks() {
        axios.get("http://localhost:3000/api/books/")
            .then(response => {
                this.setState({
                    books: response.data,
                    response: {}
                })
            })

    }
    render() {
        const books = this.state.books.map(book => (
            <div key={book._id}>
                <h3><Link to={"/books/" + book._id}>{book.title}</Link></h3>
                <p>{book.description}</p>
            </div>
        ))
        return (
            <div>
                <CardGroup className='card-group' >
                    <Card text='loght' border="success" className="book-card" >
                        <Card.Img className="book-img" style={{ width: "50%" }} variant="top" src={this.image} alt="xxx" />
                        <Card.Title className="card-text"> Title:{books.title}</Card.Title>
                        <Card.Text className="card-text">Review:            {books.opinion}
                        </Card.Text>
                        <Card.Text className="card-text">Belongs to:            {books.owner}
                        </Card.Text>
                        <Card.Text className="card-text">Lented to:            {books.lented}
                        </Card.Text>
                        <Card.Body>
                                                </Card.Body>
                        <Card.Footer>                        
                            <small className="text-muted">Rating:</small> <Rating>{books.rating}</Rating>
                        </Card.Footer>
                    </Card>

                </CardGroup>
            </div>
        )
    }
}



