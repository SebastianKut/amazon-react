import React from 'react';
import './CategoryBanner.css';
import { Link } from 'react-router-dom';

function CategoryBanner({ title, link, images }) {
  return (
    <div className="categoryBanner">
      <div className="banner__title">
        <span>
          <h2>{title}</h2>
        </span>
        <span>
          <Link to="/shop">{link}</Link>
        </span>
      </div>
      <div className="banner__images">
        {images.map((image) => (
          <img src={image} />
        ))}
      </div>
    </div>
  );
}

export default CategoryBanner;
