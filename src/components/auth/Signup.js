import React, { Component } from 'react';
import AuthService from '../../auth/auth-services';
import { Link, Redirect } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../Navbar'

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '' };
        this.service = new AuthService();

    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const email = this.state.email;
        const password = this.state.password;

        this.service.signup(email, password)
            .then(response => {
                this.setState({
                    email: "",
                    password: ""
                });
                this.props.callback(response)
                this.setState({redirect:true})

            })
            .catch(error => console.log(error))
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to="/profile" />
        }
    }
    render() {
        return (
            <div >
            {this.handleRedirect()}
                <NavBar></NavBar>
                <Form className="signup" onSubmit={this.handleFormSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control className="input-form"
                            type="email"
                            placeholder="your email"
                            name="email"
                            value={this.state.email}
                            onChange={e => this.handleChange(e)} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                    </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control className="input-form"
                            type="password"
                            placeholder=" password"
                            name="password"
                            value={this.state.password}
                            onChange={e => this.handleChange(e)} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Create account
                    </Button>
                </Form>
                <div className="already">
                    <p className="m-0 mr-3">Already have account?</p>
                    <Link to={"/login"}>Login!</Link>
                </div>


            </div>
        )
    }
}
export default Signup;
