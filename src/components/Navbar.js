import React, { Component } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default class NavBar extends Component {
  render() {
    let authLink = (
      <>
        <li className="nav-item">
          <Nav.Link to="/signup" className="nav-link">
            Signup
          </Nav.Link>
        </li>
        <li className="nav-item">
          <Nav.Link to="/login" className="nav-link">
            Login
          </Nav.Link>
        </li>
      </>
    );
    if (this.props.user) {
      console.log("Hay usuario logueado!", this.props.user);
      authLink = (
        <li className="nav-item">
          <Nav.Link to="/logout" className="nav-link">
            Hola {this.props.user.email}
          </Nav.Link>
        </li>
      );
    }
    return (
      <div>
        <Navbar className="navbar" bg="light" variant="light" sticky="top">
          <Navbar.Brand href="/">Lost&Mine</Navbar.Brand>
          <Nav className="mr-auto"></Nav>
          <NavDropdown title="Menu" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
            <NavDropdown.Item href="/mybooks">My books</NavDropdown.Item>
            <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
          </NavDropdown>
        </Navbar>
      </div>
    );
  }
}
