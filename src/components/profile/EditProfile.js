import React, { Component } from 'react'
import axios from 'axios';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



export default class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            favGenres: "",
        }
    }
    handleFormSubmit = (event) => {
        const username = this.state.username;
        const favGenres = this.state.favGenres;

        event.preventDefault();

        axios.put(`${process.env.REACT_APP_API_URL}/users/${this.props.theUser._id}`, { username, favGenres }, { withCredentials: true })
            .then(() => {
                this.props.getTheUser();
                this.props.history.push('/profile');
            })
            .catch(error => console.log(error))
    }

    handleChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }


    render() {
        return (
            <div>
                <Form onSubmit={this.handleFormSubmit}>
                    <div className="form-group">
                        <label>Username:</label>
                        <textarea
                            className="form-control"
                            name="username"
                            defaultValue="we don't know yet"
                            value={this.state.username}
                            onChange={e => this.handleChange(e)} />
                    </div>
                    <div className="form-group">
                        <label>Favourite genres:</label>
                        <textarea
                            className="form-control"
                            defaultValue="we don't know yet"
                            name="favGenres"
                            value={this.state.favGenres}
                            onChange={e => this.handleChange(e)} />
                    </div>


                    <input type="submit"
                        className="btn btn-primary"
                        value="Save changes" />

                </Form>
                

            </div>
        )
    }
}
