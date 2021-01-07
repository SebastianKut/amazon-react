import React from 'react';
import './Product.css';
import StarRateOutlinedIcon from '@material-ui/icons/StarRateOutlined';

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>The lean startup</p>
        <p className="product__price">
          <small>$</small>
          <strong>19.99</strong>
        </p>
        <div className="product__rating">
          <StarRateOutlinedIcon />
        </div>
      </div>
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/71SGITPxbgL._AC_SL1500_.jpg"
        alt=""
      />
      <button>Add to basket</button>
    </div>
  );
}

export default Product;
