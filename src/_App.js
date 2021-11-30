import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import {Route , Link, Routes} from 'react-router-dom';
import BookList from './BookList';
import BookSearch from './BookSearch';

// Define Array of objects for the shelves types.
const shelfList = [
  { key: 'currentlyReading', name: 'Currently Reading' },
  { key: 'wantToRead', name: 'Want to Read' },
  { key: 'read', name: 'Read' }
];

class BooksApp extends React.Component {

  state = {
    books: [] 
  };

  componentDidMount() {
    // get books on load
    BooksAPI.getAll().then(books => this.setState({ books }));
  };

  changeShelf = (changedBook, shelf) => {
    BooksAPI.update(changedBook, shelf).then(response => {
      // set the new shelf value to the book affected.
      changedBook.shelf = shelf;
      // update state with changed book
      this.setState(prevState => ({
        books: prevState.books
          // remove updated book from array
          .filter(book => book.id !== changedBook.id)
          // add updated book to array
          .concat(changedBook)
      }));
    });
  };


  render() {
    return (
      <div className="app">
        <Routes className= "app">
  
          <Route exact path="/" render = {() => (
            <BookList 
              books= {[this.state.books]}
              bookshelves = {[shelfList]}
              changeShelf = { this.changeShelf} />
          )} />
          <Route path= "/search" render = {() => (
            <BookSearch booksSearch = {[this.state.books]}/>
          )} />  
        </Routes>
      </div>
    )
  }
}

export default BooksApp
