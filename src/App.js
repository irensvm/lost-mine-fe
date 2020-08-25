import React, { Component } from 'react';
import OpenMenu from './components/OpenMenu'
import BookCard from './components/BookCard'
import GoogleBtn from './components/GoogleBtn'




export default class App extends Component {
  render() {
    return (
      <div>
      <GoogleBtn></GoogleBtn>
      <OpenMenu></OpenMenu>
      <BookCard></BookCard>
        
      </div>
    )
  }
}
