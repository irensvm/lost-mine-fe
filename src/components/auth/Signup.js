import React, { Component } from 'react';
import AuthService from '../../auth/auth-services';
import { Link } from 'react-router-dom';
import {Button, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '' };
        this.service = new AuthService();
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const password = this.state.password;
        const email = this.state.email;

        this.service.signup(email, password)
            .then(response => {
                this.setState({
                    email: "",
                    password: ""
                });
                this.props.getUser(response)
            })
            .catch(error => console.log(error))
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }
    render() {
        return (
            <div >



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
                        Submit
                    </Button>
                </Form>
                <div className="google-icon-wrapper">

                    <a href='http://localhost:3000/api/auth/google'>
                        <img width="20px" alt="google-icon" className="google-icon"
                            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
                        <p className="btn-text"><b>Sign up with Google</b></p>
                    </a>
                </div>

                <div className="already">
                    <p className="m-0 mr-3">Already have account?</p>
                    <Link to={"/login"}>Login!</Link>
                </div>

            </div>
            //<h2>register form</h2>
            //</div><form onSubmit={this.handleFormSubmit} className="form-div">

            //</div>    <input
            //</div>        className="input-form"
            //</div>        type="email"
            //</div>        placeholder="your email"
            //</div>        name="email"
            //</div>        value={this.state.email}
            //</div>        onChange={e => this.handleChange(e)}
            //</div>    />

            //</div>    <input
            //</div>        className="input-form"
            //</div>        type="password"
            //</div>        placeholder=" password"
            //</div>        name="password"
            //</div>        value={this.state.password}
            //</div>        onChange={e => this.handleChange(e)}
            //</div>    />


            //</div>    <button className="btn log-btn" type="submit">
            //</div>        SIGN IN
            //</div>    </button>
            //</div></form>


            //</div><div className="google-icon-wrapper">

            //</div>    <a href='http://localhost:3000/api/auth/google'>
            //</div>        <img width="20px" alt="google-icon" className="google-icon"
            //</div>            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
            //</div>        <p className="btn-text"><b>Sign up with Google</b></p>
            //</div>    </a>
            //</div></div>

            //</div><div className="already">
            //</div>    <p className="m-0 mr-3">Already have account?</p>
            //</div>    <Link to={"/login"}>Login!</Link>
            //</div></div>


        )
    }
}
export default Signup;
