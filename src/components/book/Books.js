import React, { Component } from "react";
import SearchBooks from "./SearchBooks";
import request from "superagent";
import BookResult from "./BookResult";

export default class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchField: "",
    };
  }

  searchBook = (e) => {
    e.preventDefault();
    request
      .get("https://www.googleapis.com/books/v1/volumes")
      .query({ q: this.state.searchField })
      .then((data) => {
        console.log(data);
        this.setState({ books: [...data.body.items] });
      });
  };

  handleSearch = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    return (
      <div className="books">
        <SearchBooks
          searchBook={this.searchBook}
          handleSearch={this.handleSearch}
        />
        <BookResult books={this.state.books} />
      </div>
    );
  }
}
