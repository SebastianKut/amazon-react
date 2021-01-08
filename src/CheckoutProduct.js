import React from 'react';
import './CheckoutProduct.css';
import StarRateOutlinedIcon from '@material-ui/icons/StarRateOutlined';

function CheckoutProduct({ id, image, title, price, rating }) {
  return (
    <div className="checkoutProduct">
      <img src={image} alt="" className="checkoutProduct__image" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map(() => (
              <StarRateOutlinedIcon />
            ))}
        </div>
        <button>Remove from Cart</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
