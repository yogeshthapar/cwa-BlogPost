/* eslint-disable no-nested-ternary */
import React from 'react';
import Article from '../Article/index';
import './Main.css';
import API_KEY from './constants';

/**
 * Main component.
 */
const Main = () => {
  const [articles, setArticle] = React.useState(null);
  const [searchInput, setSearchInput] = React.useState();
  const [error, setError] = React.useState(false);
 
  const filterArticles = (data) => {
    if (data) {
      const resultsArray = data.filter(
        item => item.author && item.title && item.description && item.url,
      );
      setArticle(resultsArray.slice(0, 10));
    }
  };

  const fetchPosts = (searchParam) => {
    const URI = `http://newsapi.org/v2/everything?q=${searchParam}&apiKey=${API_KEY}`;
    const fetchURL = `${URI}`;
    fetch(fetchURL)
      .then(response => response.json())
      .then(response => filterArticles(response.articles));
  };

  const handleSubmit = () => {
    if (searchInput) {
      fetchPosts(searchInput);
      setError(false);
    } else {
      setError(true);
    }
    return false;
  };

  const handleChange = (event) => {
    setSearchInput(event.target.value);
  };
  return (
    <div className="bt--container-main">
      <h1> BT React Code Test - by Yogesh Goyal - 19/01/21 </h1>

      <div className="row">
        <div className="column">
          <div className="card">
            <div className="search">
              <form
                className="search-form"
              >
                <input type="text" value={searchInput} onChange={() => handleChange(event)} placeholder="Search for news.." />
                <button type="button" onClick={() => handleSubmit()}> Submit </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {!error && articles && articles.length > 0
        ? (
          <div className="bt--wrapper-artice">
            <Article data={articles} /> 
          </div>
        )
        : (!error && articles && articles.length === 0) && (
          <div key="post--not-found" className="row">
            <div className="column">
              <div className="card">
                No Post matching your query found!
              </div>
            </div>
          </div>
        )}
    </div>
  );
};

export default Main;
