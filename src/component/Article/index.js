import React from 'react';

/**
 * Article component.
 */
const Article = props => props.data.map(item => (
  <div key={item.author + item.title} className="row">
    <div className="card card--fullwidth">
      <div className="row">
        <div>
          <div>
            <div className="bt--wrapper-content">
              <span>Title - </span>
              {item.title}
            </div>
            <div>
              <div className="bt--wrapper-content">
                <span>Author - </span>
                {item.author}
              </div>
              <div>
                {item.description}
              </div>
              <div className="bt--wrapper-content">
                <span>Read More - </span>
                <a href={item.url} target="__blank">{item.url}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
));

export default Article;
