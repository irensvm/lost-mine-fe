import React, { Component } from 'react'
import axios from 'axios';

export default class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: this.props.theUser.username,
            favGenres: this.props.theUser.favGenres,
        }
    }
    handleFormSubmit = (event) => {
        const username = this.state.username;
        const favGenres = this.state.favGenres;

        event.preventDefault();

        axios.put(`http://localhost:3000/api/projects/${this.props.theUser._id}`, { username, favGenres }, { withCredentials: true })
            .then(() => {
                this.props.getTheUser();
                // after submitting the form, redirect to '/projects'
                //this.props.history.push('/pr');
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
                            value={this.state.username}
                            onChange={e => this.handleChange(e)} />
                    </div>
                    <div className="form-group">
                        <label>Favourite genres:</label>
                        <textarea
                            className="form-control"
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
