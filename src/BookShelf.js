import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

// Functional Component Definition
const BookShelf = (props) =>
{
    // prop definition with types and validation
    // book shelf to be shown
    // All books to be filter under a certain shelf. 
    // propagate the change shelf function coming from the parent component. 
    BookShelf.prototype = {
        shelf: PropTypes.object.isRequired,
        books: PropTypes.array.isRequired,
        changeShelf: PropTypes.func
    }
    // filter to keep the books related to the currect shelf.
    const booksOnCurrentShelf = props.books.filter(book => book.shelf === props.shelf.key);

    return(
            <div className="bookshelf">
              <h2 className="bookshelf-title">{props.shelf.name}</h2>
              <div className="bookshelf-books">
                {console.log("shelf passed")}
                {console.log(props.shelf)}
                {console.log("books passed")}
                {console.log(props.books)}
                <ol className="books-grid">
                    {/* Map functions to Add the books related to the shelf adding Book component for each book */}
                    {booksOnCurrentShelf.map(book => (
                        <Book key={book.id} book={book} shelf={props.shelf.key} changeShelf={props.changeShelf} />
                  ))}
                </ol>
              </div>
            </div>
          );
    };
export default BookShelf;
