import React from 'react';
import './Product.css';
import StarRateOutlinedIcon from '@material-ui/icons/StarRateOutlined';

function Product({ title, price, image, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((star) => (
              <StarRateOutlinedIcon key={star} />
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button>Add to basket</button>
    </div>
  );
}

export default Product;