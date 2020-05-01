import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import './index.css';
import App from './App';

const root = document.querySelector('#root')
render(
    <Router>
         <App />
    </Router>,
     root
);

