import React from "react";
import PropTypes from 'prop-types';

const BookShelfChangeMenu = (props) =>
{
    // prop definition with types and validation
    BookShelfChangeMenu.prototype = {
        shelf: PropTypes.object.isRequired,
        book: PropTypes.object.isRequired,
        changeShelf: PropTypes.func

    };
    // On Event triggered call the changeShelf function
    const handleChange = (event) => {
        props.changeShelf(props.book, event.target.value)
    };

    return(
            <div className="book-shelf-changer">
		        {/* Define a dropdownlist to handle moving books between shelves.*/}
                <select value={props.book.shelf} onChange={handleChange}>
                    <option value="move" disabled>
                        Move to...
                    </option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
          );
    };
export default BookShelfChangeMenu;