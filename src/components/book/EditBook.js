import React, { Component } from 'react'
import Rating from './Rating';


export default class EditBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            opinion: this.props.theBook.opinion,
            rating: this.props.theBook.rating,
            owner: this.props.theBook.owner,
            lented: this.props.theBook.lented
        }
    }


    handleFormSubmit = (event) => {
        const opinion = this.state.opinion;
        const rating = this.state.rating;
        const owner = this.state.owner;
        const lented = this.state.lented;


        event.preventDefault();

        axios.put(`http://localhost:5000/api/books/${this.props.theBook._id}`, { title, opinion }, { withCredentials: true })
            .then(() => {
                this.props.getTheBook();
                // after submitting the form, redirect to '/projects'
                //this.props.history.push('/projects');
            })
            .catch(error => console.log(error))
    }


    handleChangeOpinion = (event) => {
        this.setState({
            opinion: event.target.value
        })
    }

    handleChangeRating = (event) => {
        this.setState({
            rating: event.target.value
        })
    }
    handleChangeOwner = (event) => {
        this.setState({
            owner: event.target.value
        })
    }
    handleChangeLented = (event) => {
        this.setState({
            lented: event.target.value
        })
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleFormSubmit}>
                    <div className="form-group">
                        <label>Opinion:</label>
                        <textarea
                            className="form-control"
                            name="opinion"
                            value={this.state.opinion}
                            onChange={e => this.handleChangeOpinion(e)} />
                    </div>
                    <div>
                        <Rating onChange={e => this.handleChangeRating(e)}></Rating>

                    </div>
                    <div className="form-group">
                        <label>Owner:</label>
                        <textarea
                            className="form-control"
                            name="owner"
                            value={this.state.owner}
                            onChange={e => this.handleChangeOwner(e)} />
                    </div>
                    <div className="form-group">
                        <label>Lented to:</label>
                        <textarea
                            className="form-control"
                            name="lented"
                            value={this.state.lented}
                            onChange={e => this.handleChangeLented(e)} />
                    </div>
                    <input type="submit"
                        className="btn btn-primary"
                        value="Save changes" />

                </Form>

            </div>
        )
    }
}
