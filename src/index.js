import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import './css/main.css';

/**
 * Purpose:- Render App component onto Root Element
 */
ReactDOM.render(<App />, document.getElementById('root'));

/**
 * Purpose:- Hot Module Replacement 
 */
module.hot.accept();
