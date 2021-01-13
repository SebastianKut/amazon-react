import React from 'react';
import './CategoryBanner.css';

function CategoryBanner({ title, link, images }) {
  return (
    <div className="categoryBanner">
      <div className="banner__title">
        <span>
          <h2>{title}</h2>
        </span>

        <span>
          <a href="#">{link}</a>
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
