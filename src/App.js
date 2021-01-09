import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Payment from './Payment';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Checkout';
import { auth } from './firebase';
import { useGlobalContext } from './StateProvider';

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
            <Home />
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
            <Payment />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
