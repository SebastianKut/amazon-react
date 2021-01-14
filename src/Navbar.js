import React from 'react';
import './Navbar.css';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import { useGlobalContext } from './StateProvider';

function Navbar() {
  const [{}, dispatch] = useGlobalContext();

  const handleShowMenu = () => {
    dispatch({
      type: 'SHOW_MENU',
      payload: true,
    });
  };
  return (
    <div className="navbar">
      <div className="navbar__left">
        <div className="navbar__menu" onClick={handleShowMenu}>
          <MenuOutlinedIcon />
          <p>All</p>
        </div>
        <ul className="navbar__links">
          <li className="nav__link">Today's Deals</li>
          <li className="nav__link">Customer Service</li>
          <li className="nav__link">Gift Cards</li>
          <li className="nav__link">Sell</li>
          <li className="nav__link">Registry</li>
        </ul>
      </div>
      <div className="navbar__right">
        <p>Amazon's response to COVID-19</p>
      </div>
    </div>
  );
}

export default Navbar;
