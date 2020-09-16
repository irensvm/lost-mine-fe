import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import AddBook from "./AddBook";
import AddBookButton from "./AddBookButton";
import BookCard from "./BookCard";
export default class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      // user: session.user.current_id
    };
  }
  componentDidMount() {
    this.getAllBooks();
  }
  getAllBooks() {
    axios.get(`${process.env.REACT_APP_API_URL}/books`).then((response) => {
      this.setState({
        books: response.data,
      });
    });
  }
  render() {
    const books = this.state.books.map((book) => (
      <div key={book._id}>
        <Card text="dark" border="success" className="book-card">
          <Card.Img
            className="book-img"
            style={{ width: "50%" }}
            variant="top"
            src={this.image}
            alt="xxx"
          />
          <Card.Title>Title:{book.title}</Card.Title>
          <Card.Text>Review: {book.opinion}</Card.Text>
          <Card.Text>Belongs to: {book.owner}</Card.Text>
          <Card.Text>Lented to: {book.lented}</Card.Text>
          <Card.Footer>
            <small className="text-muted">Rating:</small> {book.rating}
          </Card.Footer>
        </Card>
      </div>
    ));

    let add = "";
    if (this.props.user) {
      add = <AddBook updateData={() => this.getAllBooks()} />;
    }

    return (
      <div className="container">
        <div style={{ width: "60%", float: "left" }}>
          <AddBookButton></AddBookButton>
          <h1>book List</h1>
          {books}
        </div>
        <div style={{ width: "40%", float: "right" }}>{add}</div>
      </div>
    );
  }
}
