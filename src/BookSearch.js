import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Book from './Book';
import * as BooksAPI from './BooksAPI';

// Use class component here to keep the state, when the state change the componenets rendered. 
class BookSearch  extends React.Component {
    // 
    static propTypes = {
        books: PropTypes.array.isRequired,
        changeShelf: PropTypes.func.isRequired
      };

    state = {
        query: '',
        searchResult: []
    };

  runSearch = event => {
    const query = event.target.value;
    this.setState({ query });

    // if query has value call the search in the Books API. and send the value in the query trim spaces and get up to 20 results only. 
    // if there is result update the sate of the search results - books returned. if empty update it will empty array.
    if (query) {
      console.log(query);
      BooksAPI.search(query.trim(), 20).then(books => {
        books.length > 0
          ? this.setState({ searchResult: books })
          : this.setState({ searchResult: [] });
      });
    } 
    else
    {
      console.log("in empty state");
      this.setState({ searchResult: [] });
    }
  };
  render()
  {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          {/* Add a link to close the search and return back to the main path / */}
          <Link className="close-search" to="/">
            Close
          </Link>
          {/* add input of type text with a place holder to initialize it with guidance of the search criteria
              use the query value in the state to set the input value and assign the handler to the On event onChange */}
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={this.runSearch}
            />
          </div>
        </div>
        {/* Show the search result as an order list mapping the result arrary of type book
            to add componenet of type Book. Passing as usual the chaange shelf method */}
        <div className="search-books-results">
          {this.state.searchResult.length > 0 && (
            <div>
              <h3>Search returned {this.state.searchResult.length} books </h3>
              <ol className="books-grid">
                {this.state.searchResult.map(book => (
                        <Book key={book.id} book={book} shelf={book.shelf} changeShelf={this.props.changeShelf} />
                  ))}
              </ol>
            </div>
          )}
         
        </div>
      </div>
    );
  }
}
export default BookSearch;
