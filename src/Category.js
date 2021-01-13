import React from 'react';
import './Category.css';

function Category({ title, image }) {
  return (
    <div className="category">
      <div className="category__info">
        <h2>{title}</h2>
      </div>
      <div className="category__image">
        <img src={image} alt="" />
      </div>
      <div className="category__footer">
        <a href="#">Shop now</a>
      </div>
    </div>
  );
}

export default Category;
