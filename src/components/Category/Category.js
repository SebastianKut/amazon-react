import React from 'react';
import './Category.css';
import { Link } from 'react-router-dom';

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
        <Link to="/shop">Shop now </Link>
      </div>
    </div>
  );
}

export default Category;
