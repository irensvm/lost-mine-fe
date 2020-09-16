import React from "react";
import { Card, CardColumns, CardDeck } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import FavButton from "./FavButton";
import AddBookButton from "./AddBookButton";

export default function BookCard(props) {
  return (
    <div
      className="card-res"
      style={{ marginTop: 20, marginBottom: 20, width: 900, height: 720 }}
    >
      <CardDeck className="card m-2 wid">
        <Card bg="dark" text="light" border="light" className="book-card">
          <Card.Img
            style={{
              width: "auto",
              height: "auto",
              maxHeight: "90%",
              maxWidth: "100%",
            }}
            variant="top"
            src={props.image}
            alt="book.img"
          />
          <Card.Title text="light" className="card-text">
            {" "}
            {props.title}
          </Card.Title>
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
          <Card.Footer text="light">
            <small className="text-muted">Written by: {props.author}</small>
          </Card.Footer>
        </Card>
      </CardDeck>
    </div>
  );
}
