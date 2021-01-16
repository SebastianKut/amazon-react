import React from 'react';
import './Header.css';
import logo from './media/amazon-logo.png';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link, useHistory } from 'react-router-dom';
import { useGlobalContext } from './StateProvider';
import { auth } from './firebase';
import usaIcon from './media/usa-icon.png';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';

function Header() {
  const [{ basket, user }] = useGlobalContext();
  const history = useHistory();
  const handleAuth = () => {
    if (user) {
      auth.signOut();
      history.push('/');
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <div className="header__border">
          <img src={logo} alt="" className="header__logo" />
        </div>
      </Link>
      <div className="header__border">
        <div className="header__deliver">
          <RoomOutlinedIcon />
          <div className="header__option">
            <span className="header__optionLineOne">Deliver to</span>
            <span className="header__optionLineTwo">Poland</span>
          </div>
        </div>
      </div>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__border">
          <div className="header__option header__language">
            <img className="header__flag" src={usaIcon} alt="" />
          </div>
        </div>
        <Link to={!user && '/login'}>
          <div className="header__border">
            <div className="header__option" onClick={handleAuth}>
              <span className="header__optionLineOne">
                Hello, {user ? user.email : 'Sign in'}
              </span>
              <span className="header__optionLineTwo">
                {user ? 'Sign Out' : 'Account & Lists'}
              </span>
            </div>
          </div>
        </Link>
        <Link to={!user ? '/login' : '/orders'}>
          <div className="header__border">
            <div className="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">& Orders</span>
            </div>
          </div>
        </Link>
        <Link to="/basket" className="header__basket">
          <div className="header__border">
            <div className="header__optionBasket">
              <ShoppingCartOutlinedIcon />
              <span className="header__optionLineTwo header__basketCount">
                {basket?.length}
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
