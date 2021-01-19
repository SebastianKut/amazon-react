import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Login from './components/Login/Login';
import Payment from './components/Payment/Payment';
import Orders from './components/Orders/Orders';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './components/Checkout/Checkout';
import { auth } from './vendors/firebase';
import { useGlobalContext } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js'; //npm install @stripe/stripe-js
import { Elements } from '@stripe/react-stripe-js'; //npm install @stripe/react-stripe-js
import SideMenu from './components/SideMenu/SideMenu';

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
