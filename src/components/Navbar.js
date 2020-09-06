import React, { Component } from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default  class NavBar extends Component {

    render() {
        return (
            <div>
                <Navbar className="navbar" bg="light" variant="light">
                    <Navbar.Brand href="/">Lost&Mine</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/books">Books</Nav.Link>
                    </Nav>
                    <NavDropdown title="Welcome back!" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                        <NavDropdown.Item href="/signup">Sign up</NavDropdown.Item>
                        <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>      </NavDropdown>
                    
                </Navbar>


            </div>



        )
    }
}

