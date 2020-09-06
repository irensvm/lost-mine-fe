import React, { Component } from 'react'
import { Form, Button, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const SearchBooks = (props) => {

    return (
        <div className="search-books">
            <Form onSubmit={props.searchBook} inline>
                <FormControl onChange={props.handleSearch} type="text" placeholder="Search" className="mr-sm-2" />
                <Button type="submit" variant="outline-primary">Search</Button>
            </Form>
        </div>
    )
}


export default SearchBooks