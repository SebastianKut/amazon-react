import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Navbar from './Navbar';
import Home from './Home';
import Shop from './Shop';
import Login from './Login';
import Payment from './Payment';
import Orders from './Orders';
import Footer from './Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Checkout';
import { auth } from './firebase';
import { useGlobalContext } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js'; //npm install @stripe/stripe-js
import { Elements } from '@stripe/react-stripe-js'; //npm install @stripe/react-stripe-js
import SideMenu from './SideMenu';

const promise = loadStripe(
  'pk_test_51I7wrjLZv7WKvm6KLSx3FzeQ8fuxzQAdcH11QlQRFRY2qwPCmZzfOSegwCdXvofJzphwj9OjnJSqQyMOqnlio8sY00acMndlb8'
);

function App() {
  const [{ showMenu }, dispatch] = useGlobalContext();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
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
  }, [dispatch]);

  return (
    <Router>
      <div className={`app ${showMenu && 'overlay'}`}>
        <Switch>
          <Route exact path="/">
            <SideMenu />
            <Header />
            <Navbar />
            <Home />
            <Footer />
          </Route>
          <Route path="/shop">
            <SideMenu />
            <Header />
            <Navbar />
            <Shop />
            <Footer />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route path="/basket">
            <SideMenu />
            <Header />
            <Navbar />
            <Checkout />
            <Footer />
          </Route>
          <Route path="/checkout">
            <SideMenu />
            <Header />
            <Navbar />
            {/* wrap Payment component in stripe */}
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            <Footer />
          </Route>
          <Route path="/orders">
            <SideMenu />
            <Header />
            <Navbar />
            <Orders />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
