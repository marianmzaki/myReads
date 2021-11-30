import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import BookShelf from './BookShelf';

// Functional Component Definition
const BookList = (props) =>
{
    // prop definition with types and validation.
    // book list 
    // list of book shelves came from the App.js
    // propagate the change shelf function coming from the App.js
    BookList.prototype = {
        books: PropTypes.array.isRequired,
        bookshelves: PropTypes.array.isRequired,
        changeShelf: PropTypes.func

    }
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                {/* use map function to map dynamically the shelves in the list to the component BookShelf to avoid static defintion*/}
                {console.log(props.bookshelves)}
                {console.log("books sent as prop to the book list")}
                {console.log(props.books)}\
                {props.bookshelves.map(shelf => (
                    <BookShelf
                        key={shelf.key}
                        shelf={shelf}
                        books={props.books}
                        // pass the function that change the shelf
                        changeShelf={props.changeShelf}
                    />
                ))}
                </div>
            </div>
            <div className="open-search">
                <Link to="search">
                    <button>Add a Book</button>
                </Link>
            </div>
        </div>
    );
      
    }

export default BookList;
