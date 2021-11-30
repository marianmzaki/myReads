import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
    /* Wrap the Application in Browser Router 
    to handle professinal routing and maintain history
    */
   <BrowserRouter>
        <App />
    </BrowserRouter>, 
    document.getElementById('root'))
