import React, { forwardRef } from 'react';
import './CheckoutProduct.css';
import StarRateOutlinedIcon from '@material-ui/icons/StarRateOutlined';
import { useGlobalContext } from './StateProvider';

function CheckoutProduct({
  id,
  image,
  title,
  price,
  rating,
  basketId,
  hideButton,
}) {
  const [{ basket }, dispatch] = useGlobalContext();
  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      payload: basketId,
    });
  };

  return (
    <div className="checkoutProduct">
      <div className="checkoutProduct__image">
        <img src={image} alt="" />
      </div>
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
        {!hideButton && (
          <button onClick={removeFromBasket}>Remove from Cart</button>
        )}
      </div>
    </div>
  );
}
export default CheckoutProduct;
