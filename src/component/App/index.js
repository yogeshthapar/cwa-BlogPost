import React from 'react';
import './App.css';
import Header from '../Header';
import Footer from '../Footer';

/**
 * App component.
 * Child Component- Header Footer and Main Body
 */
const App = () => (
  <div className="bt--container-page">
    <Header />
    Main
    <Footer />
  </div>
);

export default App;
