import React from "react";
import { Card, CardColumns, CardDeck } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import FavButton from "./FavButton";
import AddBookButton from "./AddBookButton";
import "./BookCardRes.css";
export default function BookCard(props) {
  return (
    <div className="card-res">
      <CardDeck className="card m-2 wid">
        <Card bg="dark" text="light" border="light" className="book-card">
          <div className="book-card-title">
            <Card.Title text="light" className="card-text">
              {" "}
              {props.title}
            </Card.Title>
          </div>
          <div className="book-card-left">
            {" "}
            <Card.Img variant="top" src={props.image} alt="book.img" />
          </div>
          <div className="book-card-right">
            {" "}
            <Card.Text
              text="light"
              className="card-text"
              line={1}
              style={{ flex: 1, flexWrap: "wrap", margin: 10 }}
            >
              {props.description}
            </Card.Text>
            <Card.Body>
              <FavButton></FavButton>
              <AddBookButton></AddBookButton>
            </Card.Body>
          </div>
          <div className="book-card-author">
            <Card.Footer text="light">
              <small>By: {props.author}</small>
            </Card.Footer>
          </div>
        </Card>
      </CardDeck>
    </div>
  );
}
