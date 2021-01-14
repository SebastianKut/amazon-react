import React from 'react';
import './SideMenu.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CloseIcon from '@material-ui/icons/Close';
import { useGlobalContext } from './StateProvider';

function SideMenu() {
  const [{ showMenu }, dispatch] = useGlobalContext();

  const handleHideMenu = () => {
    dispatch({
      type: 'HIDE_MENU',
      payload: false,
    });
  };
  return (
    <div className={`sideMenu ${showMenu && 'show'}`}>
      <div className="sideMenu__container">
        <div className="sideMenu__title">
          <AccountCircleIcon />
          <h3>Hello, Sign In</h3>
        </div>
        <div className="sideMenu__links">
          <div className="sideMenu__links__section">
            <h3>Digital Content & Devices</h3>
            <ul>
              <li>Amazon Music</li>
              <li>Kindle E-readers & Books</li>
              <li>Appstore for Android</li>
            </ul>
          </div>
          <div className="sideMenu__links__section">
            <h3>Shop by Department</h3>
            <ul>
              <li>Electronics</li>
              <li>Computers</li>
              <li>Smart Home</li>
              <li>Arts & Crafts</li>
            </ul>
          </div>
          <div className="sideMenu__links__section">
            <h3>Programs & Features</h3>
            <ul>
              <li>Gift Cards</li>
              <li>#FoundItOnAmazon</li>
              <li>Amazon Live</li>
              <li>International Shopping</li>
              <li>Amazon Second Chance</li>
            </ul>
          </div>
          <div className="sideMenu__links__section">
            <h3>Help & Settings</h3>
            <ul>
              <li>Your Account</li>
              <li>English</li>
              <li>Help</li>
              <li>United States</li>
              <li>Sign in</li>
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
