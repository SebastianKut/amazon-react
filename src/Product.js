import React from 'react';
import './Product.css';
import StarRateOutlinedIcon from '@material-ui/icons/StarRateOutlined';
import { useGlobalContext } from './StateProvider';
//import StarHalfOutlinedIcon from '@material-ui/icons/StarHalfOutlined';
import { v4 as uuidv4 } from 'uuid';

function Product({ id, title, price, image, rating }) {
  const [{ basket }, dispatch] = useGlobalContext();

  console.log('basket>>>', basket);

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      payload: {
        id,
        title,
        price,
        image,
        rating,
        basketId: uuidv4(),
      },
    });
  };
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
      <button onClick={addToBasket}>Add to Cart</button>
    </div>
  );
}

export default Product;
