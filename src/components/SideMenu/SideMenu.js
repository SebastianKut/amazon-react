import React from 'react';
import './SideMenu.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CloseIcon from '@material-ui/icons/Close';
import { useGlobalContext } from '../../StateProvider';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../vendors/firebase';

function SideMenu() {
  const [{ showMenu, user }, dispatch] = useGlobalContext();
  const history = useHistory();

  const handleHideMenu = () => {
    dispatch({
      type: 'HIDE_MENU',
      payload: false,
    });
  };

  const handleAuth = () => {
    if (user) {
      auth.signOut();
      history.push('/');
    }
    handleHideMenu();
  };

  return (
    <div className={`sideMenu ${showMenu && 'show'}`}>
      <div className="sideMenu__container">
        <div className="sideMenu__title">
          <AccountCircleIcon />
          <h3>Hello, {`${user ? user.email : 'Sign In'}`}</h3>
        </div>
        <div className="sideMenu__links">
          <div className="sideMenu__links__section">
            <h3>Digital Content & Devices</h3>
            <ul>
              <Link to="/shop" onClick={handleHideMenu}>
                <li>Amazon Music</li>
              </Link>
              <Link to="/shop" onClick={handleHideMenu}>
                <li>Kindle E-readers & Books</li>
              </Link>
              <Link to="/shop" onClick={handleHideMenu}>
                <li>Appstore for Android</li>
              </Link>
            </ul>
          </div>
          <div className="sideMenu__links__section">
            <h3>Shop by Department</h3>
            <ul>
              <Link to="/shop" onClick={handleHideMenu}>
                <li>Electronics</li>
              </Link>
              <Link to="/shop" onClick={handleHideMenu}>
                <li>Computers</li>
              </Link>
              <Link to="/shop" onClick={handleHideMenu}>
                <li>Smart Home</li>
              </Link>
              <Link to="/shop" onClick={handleHideMenu}>
                <li>Arts & Crafts</li>
              </Link>
            </ul>
          </div>
          <div className="sideMenu__links__section">
            <h3>Programs & Features</h3>
            <ul>
              <Link to="/shop" onClick={handleHideMenu}>
                <li>Gift Cards</li>
              </Link>
              <Link to="/shop" onClick={handleHideMenu}>
                <li>#FoundItOnAmazon</li>
              </Link>
              <Link to="/shop" onClick={handleHideMenu}>
                <li>Amazon Live</li>
              </Link>
              <Link to="/shop" onClick={handleHideMenu}>
                <li>International Shopping</li>
              </Link>
              <Link to="/shop" onClick={handleHideMenu}>
                <li>Amazon Second Chance</li>
              </Link>
            </ul>
          </div>
          <div className="sideMenu__links__section">
            <h3>Help & Settings</h3>
            <ul>
              <Link to="/shop" onClick={handleHideMenu}>
                <li>Your Account</li>
              </Link>
              <Link
                to={`${user ? '/orders' : '/login'}`}
                onClick={handleHideMenu}
              >
                <li>Returns & Orders</li>
              </Link>
              <Link to="/shop" onClick={handleHideMenu}>
                <li>English</li>
              </Link>
              <Link to="/shop" onClick={handleHideMenu}>
                <li>Help</li>
              </Link>
              <Link to="/shop" onClick={handleHideMenu}>
                <li>United States</li>
              </Link>
              <Link to={!user && '/login'} onClick={handleAuth}>
                <li>{`${user ? 'Sign out' : 'Sign in'}`}</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="sideMenu__close" onClick={handleHideMenu}>
        <CloseIcon />
      </div>
    </div>
  );
}

export default SideMenu;
