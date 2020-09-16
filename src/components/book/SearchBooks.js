import React, { Component } from "react";
import { Form, Button, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const SearchBooks = (props) => {
  return (
    <div className="search-books">
      <Form onSubmit={props.searchBook} inline>
        <h1>Looking for some books?</h1>
        <FormControl
          onChange={props.handleSearch}
          type="text"
          placeholder=""
          className="mr-sm-2"
        />
        <Button type="submit" variant="outline-light">
          Search
        </Button>
      </Form>
    </div>
  );
};

export default SearchBooks;
