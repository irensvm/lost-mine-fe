import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default class AddBookButton extends Component {
  render() {
    return (
      <div>
        <Button href="/createbook" variant="light">
          <img
            style={{ width: "26px" }}
            alt="add-book"
            src="data:image/png;base64,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"
          ></img>{" "}
        </Button>
      </div>
    );
  }
}
