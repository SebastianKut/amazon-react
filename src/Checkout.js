import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useGlobalContext } from './StateProvider';

function Checkout() {
  const [{ basket, user }, dispatch] = useGlobalContext();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img16/GiftCards/ShopWithPoints/PC_Sliced_01_revised.jpg"
          alt=""
          className="checkout__ad"
        />
        <div>
          <h3 className="checkout__name">Hello {user?.email}</h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {basket.map((item) => (
            <CheckoutProduct {...item} />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
