import React from 'react';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useGlobalContext } from './StateProvider';
import { Link } from 'react-router-dom';

function Payment() {
  const [{ basket, user }, dispatch] = useGlobalContext();
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/basket">{basket?.length} items</Link>)
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 JavaScript</p>
            <p>San Francisco, CA</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct {...item} />
            ))}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment method</h3>
          </div>
          <div className="payment__details"></div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
