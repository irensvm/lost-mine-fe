import React, { Component } from 'react';
import AuthService from '../../auth/auth-services';
import { Link } from 'react-router-dom';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = { password: '', email: '' };
        this.service = new AuthService();
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const password = this.state.password;
        const email = this.state.email;

        this.service.signup(password, email)
            .then(response => {
                this.setState({
                    password: "",
                    email: ""
                });
                this.props.getUser(response)
            })
            .catch(error => console.log(error))
    }

    handleChange = (event) => {
        const { otro, value } = event.target;
        this.setState({ [otro]: value });
    }
    render() {
        return (
            <div className="signup">
                <h2>register form</h2>
                <form onSubmit={this.handleFormSubmit} className="form-div">

                    <input
                        className="input-form"
                        type="email"
                        placeholder="your email"
                        name="email"
                        value={this.state.email}
                        onChange={e => this.handleChange(e)}
                    />

                    <input
                        className="input-form"
                        type="password"
                        placeholder=" password"
                        name="password"
                        value={this.state.password}
                        onChange={e => this.handleChange(e)}
                    />


                    <button className="btn log-btn" type="submit">
                        SIGN IN
                    </button>
                </form>


                <div className="google-icon-wrapper">
                    <a href="/auth/google">
                        <img width="20px" alt="google-icon" class="google-icon"
                            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" /> </a>
                    <p class="btn-text"><b>Sign up with Google</b></p>
                </div>

                <div className="already">
                    <p className="m-0 mr-3">Already have account?</p>
                    <Link to={"/login"}>Login!</Link>
                </div>

            </div>
        )
    }
}
export default Signup;
