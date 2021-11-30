# MyReads Project

My Reads project businees requirements:
This project arrange the books into shelves
    Current Reading
    Want to Read
    Read 
And arrange the books into those 3 shelves.
The backend is APIs that provide the book list with its data and the shelf related. 
The backend also allow update and search functionality 

Developed using React.

All dependencies are added you just need to run the following commands. 

npm install
npm start


Project Architecture:
The project is broken down into components each of which handle a simple functionality and composed them all in App.js

There is two paths
/: the home page direct you to the BookList ->
                                                BookShelf->
                                                            Book -> 
                                                                    BookChangeShelfMenu
/search that redirect you to the BookSearch -> 
                                                Book -> 
                                                        BookChangeShelfMenu

All the styles in App.css

