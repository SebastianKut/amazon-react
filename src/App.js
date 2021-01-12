import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Navbar from './Navbar';
import Home from './Home';
import Shop from './Shop';
import Login from './Login';
import Payment from './Payment';
import Orders from './Orders';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Checkout';
import { auth } from './firebase';
import { useGlobalContext } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js'; //npm install @stripe/stripe-js
import { Elements } from '@stripe/react-stripe-js'; //npm install @stripe/react-stripe-js

const promise = loadStripe(
  'pk_test_51I7wrjLZv7WKvm6KLSx3FzeQ8fuxzQAdcH11QlQRFRY2qwPCmZzfOSegwCdXvofJzphwj9OjnJSqQyMOqnlio8sY00acMndlb8'
);

function App() {
  const [{}, dispatch] = useGlobalContext();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log('This is user >>>', user);
      if (user) {
        dispatch({
          type: 'SET_USER',
          payload: user,
        });
      } else {
        dispatch({
          type: 'SET_USER',
          payload: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Header />
            <Navbar />
            <Home />
          </Route>
          <Route path="/shop">
            <Header />
            <Shop />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route path="/basket">
            <Header />
            <Checkout />
          </Route>
          <Route path="/checkout">
            <Header />
            {/* wrap Payment component in stripe */}
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
