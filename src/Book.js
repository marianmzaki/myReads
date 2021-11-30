import React from "react";
import PropTypes from 'prop-types';
import BookShelfChangeMenu from './BookShelfChangeMenu';

const Book = (props) =>
{
    // prop definition with types and validation.
    // book to be shown.
    // shelf object related to the book to be shown
    // changeShelf function propagate from the App.js to each child component to the BookShelfChangeMenu to change the book shelf. 
    Book.prototype = {
        book: PropTypes.object.isRequired,
        shelf: PropTypes.object.isRequired,
        changeShelf: PropTypes.func

    }

    return (
        <div>   
            {console.log("inside book")}
            {console.log(props.book)}
            {console.log(props.shelf)}
            <li>
                <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url(${
                            props.book.imageLinks
                                ? props.book.imageLinks.thumbnail
                                : 'not available'
                            })`
                        }}
                    />
                        {/* send the book, shelf and propagate the changeShelf function to update the book shelf to the new value*/}
                        <BookShelfChangeMenu book={props.book} shelf={props.shelf} changeShelf={props.changeShelf} />
                    </div>
                <div className="book-title">{props.book.title}</div>
                <div className="book-authors">
                    {/* if authors exist join then using , between authers and if empty show Unknown Auther instead */}
                    {props.book.authors ? props.book.authors.join(', ') : 'Unknown Author'}
                </div>
                </div>
            </li>
        </div>
      );
};
export default Book;