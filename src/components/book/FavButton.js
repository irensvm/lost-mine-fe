import React, { Component } from "react";
import { Button } from "react-bootstrap";

export default class FavButton extends Component {
  constructor() {
    super();
    this.state = {
      faved: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      faved: !this.state.faved,
    });
  }
  render() {
    return (
      <div>
        <Button onClick={this.handleClick} variant="dark">
          <img
            style={{ width: "16px" }}
            alt="fav"
            src="https://image.flaticon.com/icons/svg/1216/1216686.svg"
          ></img>
        </Button>
      </div>
    );
  }
}
