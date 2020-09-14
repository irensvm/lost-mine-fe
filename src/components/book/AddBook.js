import React, { Component } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Form } from 'react-bootstrap';
import Rating from './Rating';
import NavBar from '../NavBar';

export class AddBook extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      title: '',
      opinion: '',
      genre: '',
      owner: '',
      rating:'',
      lented:'',
      loggedInUser: this.props.user,

    }
    console.log(this.state)
    this.handleChange = this.handleChange.bind(this)
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const body = {
      title: this.state.title,
      opinion: this.state.opinion,
      lented: this.state.lented,
      genre: this.state.genre,
      rating: this.state.rating,
      owner: this.state.owner
    }
    axios.post("http://localhost:3000/api/books/", body, { withCredentials: true }) 
      .then(response => {       
        this.setState({
          title: '',
          opinion: '',
          genre: '',
          rating: '',
          lented:'',
          owner:''        
        })
      })
      //this.props.updateData()

  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
      <NavBar></NavBar>
        <Form variant="dark" action= "POST" onSubmit={this.handleSubmit} className="addbook" noValidate autoComplete="off" >
          <Form.Row >
            <Form.Group as={Col} controlId="formGridTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control name="title"
                label="Title"
                defaultValue={this.state.title}
                onChange={this.handleChange} type="text" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridAuthor">
              <Form.Label>Lented to</Form.Label>
              <Form.Control name="lented"
                defaulValue={this.state.lented}
                onChange={this.handleChange} type="text" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Genre</Form.Label>
              <Form.Control as="select" defaultValue={this.state.genre} name="genre" onChange={this.handleChange}>
                <option>Thriller</option>
                <option>Fantasy</option>
                <option>Adventure</option>
                <option>Romance</option>
                <option>Contemporary</option>
                <option>Dystopian</option>
                <option>Mystery</option>
                <option>Horror</option>
                <option>Paranormal</option>
                <option>Memoir</option>
                <option>Travel</option>
                <option>Guide / How to</option>
                <option>Cooking</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>
          <Form.Group controlId="formGridAddress1">
            <Form.Label>Review</Form.Label>
            <Form.Control placeholder="did it like you?" name="opinion"
              defaultValue={this.state.opinion}
              onChange={this.handleChange} />
          </Form.Group>
          <Form.Group controlId="formGridAddress1">
            <Form.Label>Owner</Form.Label>
            <Form.Control placeholder="this book belongs to..." name="owner" 
              //defaultValue={this.state.owner}
              onChange={this.handleChange}
                />
          </Form.Group>
          <Rating onChange={this.handleChange}></Rating>

          <input href= "/mybooks" type="submit"
            className="btn btn-primary"
            value="Add book" />

        </Form>

      </div>



    )

  }
  ;
}
export default AddBook