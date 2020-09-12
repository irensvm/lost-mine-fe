import React from 'react'
import { Card, CardGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import FavButton from './FavButton'



export default function BookCard(props) {
  return (
    <div >
    
      <CardGroup className='card-group' >
        <Card   text='dark' border="success"   className="book-card" >
          <Card.Img className="book-img" style={{ width: "50%" }}variant="top" src={props.image} alt="xxx" />
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

      </CardGroup>


    </div>
  )
}



