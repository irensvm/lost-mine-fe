import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'
//import { render } from '@testing-library/react';
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


export class AddBook extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      genre: '',
      author: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const body = {
      title: this.state.title,
      description: this.state.description,
      author: this.state.author,
      genre: this.state.genre
    }
    axios.post("http://localhost:3000/api/books/", body, { withCredentials: false }) // cambiar cuando funcione login
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
    //const classes = useStyles()
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="addbook" noValidate autoComplete="off">
          <div>
            <TextField
              required
              id="outlined-required"
              name="title"
              label="Title"
              defaultValue={this.state.title}
              variant="outlined"
              onChange={this.handleChange}
              className="form-control"
            />
            <TextField
              required
              id="outlined-required"
              label="description"
              name="description"
              defaultValue={this.state.description}
              variant="outlined"
              onChange={this.handleChange}
              className="form-control"
            />
            <TextField
              required
              id="outlined-required"
              label="author"
              name="author"
              defaulValue={this.state.author}
              variant="outlined"
              onChange={this.handleChange}
              className="form-control"

            />
            <TextField
              required
              id="outlined-required"
              label="genre"
              defaultValue={this.state.genre}
              variant="outlined"
              name="genre"
              onChange={this.handleChange}
              className="form-control"
            />

          </div>
          <input type="submit"
            className="btn btn-primary"
            value="Add book" />
        </form>

      </div>

    )

  }
  ;
}
export default AddBook