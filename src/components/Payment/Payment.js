import React, { useState, useEffect } from 'react';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import './Payment.css';
import { useGlobalContext } from '../../StateProvider';
import { Link, useHistory } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../../reducer';
import axios from '../../vendors/axios';
import { db } from '../../vendors/firebase';
import stripe_logo from '../../media/stripe-logo.png';

function Payment() {
  const [{ basket, user }, dispatch] = useGlobalContext();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState(true);
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();

  useEffect(() => {
    //to process payment from customer ClientSecret is required with the right amount, that has to change everytime basket changes
    //this is required from stripe on our express server on cloud functions, then send back to frontend from cloud functions
    const getClientSecret = async () => {
      if (getBasketTotal(basket) > 0) {
        const response = await axios({
          method: 'post',
          //stripe expects payment in subunits (ex.pennies or cents)
          url: `/payment/create?total=${Math.floor(
            getBasketTotal(basket) * 100
          )}`,
        });
        setClientSecret(response.data.clientSecret);
      }
    };
    getClientSecret();
  }, [basket]);

  console.log('client secret is -->>>', clientSecret);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then((res) => {
        const { paymentIntent } = res;
        //push order to firebase database
        db.collection('users')
          .doc(user?.uid)
          .collection('orders')
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: 'EMPTY_BASKET',
        });
        //redirect and prevent going back in the browser
        history.replace('/orders');
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    //listen for changes in CardElement and display errors as customer types card details
    setDisabled(e.empty);
    if (e.error) {
      setError(e.error.message);
      setDisabled(true);
    } else {
      setError('');
      setDisabled(false);
    }
  };

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
            <h3>Payment method </h3>
            <img className="payment__titleLogo" src={stripe_logo} alt="" />
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3>Order Total: {value}</h3>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'$'}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? 'Processing...' : 'Buy Now'}</span>
                </button>
                {error && <div>{error}</div>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
