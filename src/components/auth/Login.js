import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import AuthService from '../../auth/auth-services';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '' };
        this.service = new AuthService();
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const email = this.state.email;
        const password = this.state.password;

        this.service.login(email, password)
            .then(response => {
                this.setState({
                    email: "",
                    password: "",
                });
                this.props.getUser(response)
            })
            .catch(error => console.log("the error:", error))
    }

    handleChange = (event) => {
        const { email, value } = event.target;
        this.setState({
            [email]: value
        });
    }


    render() {
        return (
            <div className="container-fluid auth">
                <h2>Login</h2>
                <form onSubmit={this.handleFormSubmit} className="form-div">
                    <input
                        className="input-form"
                        type="text"
                        name="email"
                        value={this.state.email}
                        onChange={e => this.handleChange(e)}
                    />

                    <input
                        className="input-form"
                        type="text"
                        name="password"
                        value={this.state.password}
                        onChange={e => this.handleChange(e)}
                    />
                    <button className="btn log-btn" type="submit">
                        LOGIN
                    </button>
                </form>

                <div className="return">
                    <Link to={"/signup"}>return to sign up!</Link>
                </div>
            </div>
        )
    }
}