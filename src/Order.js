import React from 'react';
import './Order.css';
import moment from 'moment';
import CheckoutProduct from './CheckoutProduct';
import CurrencyFormat from 'react-currency-format';

function Order({ order }) {
  console.log(order);
  return (
    <div className="order">
      <h2>Order</h2>
      <p className="order__number">
        <strong>Number:</strong> {order.id}
      </p>
      <p className="order__date">
        <strong>Date:</strong>{' '}
        {moment.unix(order.data.created).format('MMMM Do YYYY, h:mma')}
      </p>
      {order.data.basket?.map((item) => (
        <CheckoutProduct {...item} hideButton={true} />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <h3 className="order__total">Order Total: {value}</h3>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
    </div>
  );
}

export default Order;
