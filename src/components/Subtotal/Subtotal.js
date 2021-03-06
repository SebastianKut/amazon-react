import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useGlobalContext } from '../../StateProvider';
import { getBasketTotal } from '../../reducer';
import { useHistory } from 'react-router-dom';

function Subtotal() {
  const history = useHistory();
  const [{ basket }] = useGlobalContext();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
      <button
        onClick={() => history.push('/checkout')}
        disabled={basket.length === 0 && true}
        className={`${basket.length === 0 && 'checkout__disabled'}`}
      >
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
