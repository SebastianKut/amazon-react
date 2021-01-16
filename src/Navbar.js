import React from 'react';
import './Navbar.css';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import { useGlobalContext } from './StateProvider';

function Navbar() {
  const [, dispatch] = useGlobalContext();

  const handleShowMenu = () => {
    dispatch({
      type: 'SHOW_MENU',
      payload: true,
    });
  };
  return (
    <div className="navbar">
      <div className="navbar__left">
        <div className="navbar__menu nav__border" onClick={handleShowMenu}>
          <MenuOutlinedIcon />
          <p>All</p>
        </div>
        <ul className="navbar__links">
          <li className="nav__link nav__border">Today's Deals</li>
          <li className="nav__link nav__border">Customer Service</li>
          <li className="nav__link nav__border">Gift Cards</li>
          <li className="nav__link nav__border">Sell</li>
          <li className="nav__link nav__border">Registry</li>
        </ul>
      </div>
      <div className="navbar__right nav__border">
        <p>Amazon's response to COVID-19</p>
      </div>
    </div>
  );
}

export default Navbar;
