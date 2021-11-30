import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import {Route , Routes} from 'react-router-dom';
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
    // get books after render.
    BooksAPI.getAll().then(books => {console.log(books) ; this.setState({ books }); console.log(this.state.books);});
    
  };
  // Define an arrow fundtion for the change shelf to be passed from parent component to child one. 
  // change the book shelf and update the state using the previous state and this result in rerender. 
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
        {console.log("test")}
        {console.log(this.state.books)}
        {console.log(shelfList)}
        {/* Add the Routes to handle the paths and to keep the history for back and forward. */}
        <Routes className= "app">  
          {/* go to BookList component in case the path is '/' - exact and pass the props */}
          <Route exact path="/" element = {
            <BookList
              books= {this.state.books}
              bookshelves = {shelfList}
              changeShelf = { this.changeShelf} />
          } />
          {/* go to BookSearch component in case the path is '/search'  and pass the props */}
          <Route exact path="/search" element = {
            <BookSearch 
              books= {this.state.books}
              changeShelf = { this.changeShelf} />
          } />
        </Routes>
      </div>
    )
  }
}
export default BooksApp
