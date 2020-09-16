import React, { Component } from "react";
import Rating from "./Rating";
import axios from "axios";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Redirect } from "react-router-dom";

export default class EditBook extends Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      _id: this.props.location.state.editbook._id,
      opinion: this.props.location.state.editbook.opinion,
      rating: this.props.location.state.editbook.rating,
      owner: this.props.location.state.editbook.owner,
      lented: this.props.location.state.editbook.lented,
    };
  }

  handleFormSubmit = (event) => {
    const opinion = this.state.opinion;
    const rating = this.state.rating;
    const owner = this.state.owner;
    const lented = this.state.lented;
    event.preventDefault();
    axios
      .put(
        `${process.env.REACT_APP_API_URL}/books/${this.state._id}`,
        { lented, owner, rating, opinion },
        { withCredentials: true }
      )
      .then(() => {
        this.props.history.push("/mybooks");
      })
      .catch((error) => console.log(error));
  };

  handleChangeOpinion = (event) => {
    this.setState({
      opinion: event.target.value,
    });
  };

  handleChangeRating = (event) => {
    this.setState({
      rating: event.target.value,
    });
  };
  handleChangeOwner = (event) => {
    this.setState({
      owner: event.target.value,
    });
  };
  handleChangeLented = (event) => {
    this.setState({
      lented: event.target.value,
    });
  };
  handleRating = (rating) => {
    this.setState({
      rating,
    });
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <label>Opinion:</label>
            <textarea
              className="form-control"
              name="opinion"
              placeholder={this.state.opinion}
              value={this.state.opinion}
              onChange={(e) => this.handleChangeOpinion(e)}
            />
          </div>
          <div>
            <Rating onChange={(e) => this.handleChangeRating(e)}></Rating>
          </div>
          <div className="form-group">
            <label>Owner:</label>
            <textarea
              className="form-control"
              name="owner"
              value={this.state.owner}
              onChange={(e) => this.handleChangeOwner(e)}
            />
          </div>
          <div className="form-group">
            <label>Lented to:</label>
            <textarea
              className="form-control"
              name="lented"
              value={this.state.lented}
              onChange={(e) => this.handleChangeLented(e)}
            />
          </div>
          <input
            type="submit"
            className="btn btn-primary"
            value="Save changes"
          />
        </Form>
      </div>
    );
  }
}
