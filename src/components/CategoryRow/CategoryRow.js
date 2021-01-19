import React from 'react';
import './CategoryRow.css';
import Category from '../Category/Category.js';

function CategoryRow({ categories }) {
  return (
    <div className="categoryRow">
      {categories?.map((category) => {
        const { id, title, image } = category;
        return <Category key={id} title={title} image={image} />;
      })}
    </div>
  );
}

export default CategoryRow;
