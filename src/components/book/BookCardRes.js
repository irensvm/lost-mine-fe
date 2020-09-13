import React from 'react'
import { Card, CardColumns, CardDeck } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import FavButton from './FavButton'


export default function BookCard(props) {
  return (
    <div style={{marginTop: 20, marginBottom: 20, width: 900}}>
    
      <CardDeck  className='card-group' >
        <Card   border="dark" style={{ width: '18rem' }}   className="book-card" >
          <Card.Img className="book-img" style={{ width: "50%" }} variant="top" src={props.image} alt="xxx" />
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.description}
          </Card.Text>
          <Card.Body>
            <FavButton></FavButton>

          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Written by: {props.author}</small>
          </Card.Footer>
        </Card>

      </CardDeck>


    </div>
  )
}



