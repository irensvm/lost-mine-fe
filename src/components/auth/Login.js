import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import AuthService from '../../auth/auth-services';
import NavBar from '../NavBar'


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
                this.setState({ email: "", password: "" });
                this.props.callback(response)
            })
            .catch(error => console.log(error))
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }


    render() {
        return (
            <div className="container-fluid auth">
            <NavBar></NavBar>
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
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={e => this.handleChange(e)}
                    />
                    <input type="submit" value="Login">
                        
                    </input>
                </form>
               
                <div className="return">
                    <Link to={"/signup"}>return to sign up!</Link>
                </div>
            </div>
        )
    }
}