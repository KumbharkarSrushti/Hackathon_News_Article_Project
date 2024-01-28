import React from 'react';

const ProductCard = ({ articles }) => (
  <div className="flex-container">
    {articles.map((article, index) => (
      <div key={index} className="col-4 Productbox">
        <img src={article.urlToImage} height="200px" width="400px" alt="Article Thumbnail" />
        <h3>{article?.title}</h3>
        <p>{article?.description}</p>
      </div>
    ))}
  </div>
);

export default ProductCard;
