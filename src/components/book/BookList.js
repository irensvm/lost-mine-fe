import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import AddBook from './AddBook'

export default class BookList extends Component {

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
                books: response.data
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

    let add = ""
    if ( this.props.user) {
        add = <AddBook updateData={() => this.getAllBooks()} /> 
    }

    return (
        <div className="container">
            <div style={{ width: '60%', float: "left" }}>
                <h1>book List</h1>
                {books}
            </div>
            <div style={{ width: '40%', float: "right" }}>
                {add}
            </div>
        </div>
    )
}
}