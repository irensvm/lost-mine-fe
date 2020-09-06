import React, { Component } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Form } from 'react-bootstrap';


export class AddBook extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      title: '',
      description: '',
      genre: '',
      author: '',
      loggedInUser: this.props.user,

    }
    console.log(this.state)
    this.handleChange = this.handleChange.bind(this)
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const body = {
      title: this.state.title,
      description: this.state.description,
      author: this.state.author,
      genre: this.state.genre,
      owner: this.state.loggedInUser
    }
    axios.post("http://localhost:3000/api/books/", body, { withCredentials: true }) // cambiar cuando funcione login
      .then(response => {
        // limpiar el formulario.
        this.setState({
          title: '',
          description: '',
          genre: '',
          author: ''
        })
        //this.props.updateData()
      })

  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <Form action= "POST" onSubmit={this.handleSubmit} className="addbook" noValidate autoComplete="off" >
          <Form.Row >
            <Form.Group as={Col} controlId="formGridTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control name="title"
                label="Title"
                defaultValue={this.state.title}
                onChange={this.handleChange} type="text" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridAuthor">
              <Form.Label>Author</Form.Label>
              <Form.Control name="author"
                defaulValue={this.state.author}
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
            <Form.Label>Description</Form.Label>
            <Form.Control placeholder="this book is about..." name="description"
              defaultValue={this.state.description}
              onChange={this.handleChange} />
          </Form.Group>

          <input type="submit"
            className="btn btn-primary"
            value="Add book" />

        </Form>

      </div>



    )

  }
  ;
}
export default AddBook