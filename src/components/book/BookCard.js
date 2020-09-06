import React from 'react'
import {Card, CardGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function BookCard(props) {
  return (
    <div >
      <CardGroup className='card-group'>
        <Card text='dark' border="success" style={{ width: '18rem' }} className="book-card" >
          <Card.Img variant="top" src={props.image} alt="xxx"  />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
           {props.description}
      </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Written by: {props.author}</small>
          </Card.Footer>
        </Card>

      </CardGroup>


    </div>
  )
}



