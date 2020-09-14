import React from 'react'
import { Card, CardColumns, CardDeck } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import FavButton from './FavButton'
import AddBookButton from './AddBookButton'


export default function BookCard(props) {
  return (
    <div className="card-res" style={{ marginTop: 20, marginBottom: 20, width: 900 }}>
      <CardDeck className="card m-2 wid" >
        <Card border="dark" style={{ width: '18rem' }} className="book-card" >
          <Card.Img className="book-img" style={{ width: "50%" }} variant="top" src={props.image} alt="xxx" />
          <Card.Title className="card-text">  {props.title}</Card.Title>
          <Card.Text className="card-text" line={1} style={{ flex: 1, flexWrap: "wrap", marginHorizontal: 10 }}>
            {props.description}
          </Card.Text>
          <Card.Body>
            <FavButton></FavButton>
            <AddBookButton></AddBookButton>

          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Written by: {props.author}</small>
          </Card.Footer>
        </Card>

      </CardDeck>


    </div>
  )
}



