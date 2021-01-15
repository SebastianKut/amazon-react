import React from 'react';
import './Product.css';
import StarRateOutlinedIcon from '@material-ui/icons/StarRateOutlined';
import { useGlobalContext } from './StateProvider';
//import StarHalfOutlinedIcon from '@material-ui/icons/StarHalfOutlined';
import { v4 as uuidv4 } from 'uuid';
import TextTruncate from 'react-text-truncate';

function Product({ id, title, price, image, rating, global_ratings }) {
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
      <img src={image} alt="" />
      <div className="product__info">
        <p className="product__price">
          {/* <small>$</small> */}
          <strong>${price}</strong>
        </p>
        <TextTruncate
          className="product__title"
          line={3}
          element="p"
          truncateText="..."
          text={title}
        />

        {/* <p className="product__title"></p> */}
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((star) => (
              <StarRateOutlinedIcon key={star} />
            ))}
          <span>{global_ratings}</span>
        </div>
      </div>

      <button onClick={addToBasket}>Add to Cart</button>
    </div>
  );
}

export default Product;
