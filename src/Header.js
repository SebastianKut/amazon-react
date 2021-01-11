import React from 'react';
import './Header.css';
import logo from './media/amazon-logo.png';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link, useHistory } from 'react-router-dom';
import { useGlobalContext } from './StateProvider';
import { auth } from './firebase';

function Header() {
  const [{ basket, user }, dispatch] = useGlobalContext();
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
        <img src={logo} alt="" className="header__logo" />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!user && '/login'}>
          <div className="header__option" onClick={handleAuth}>
            <span className="header__optionLineOne">
              Hello {user ? user.email : 'Guest'}
            </span>
            <span className="header__optionLineTwo">
              {user ? 'Sign Out' : 'Sign In'}
            </span>
          </div>
        </Link>
        <Link to={!user ? '/login' : '/orders'}>
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/basket">
          <div className="header__optionBasket">
            <ShoppingCartOutlinedIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
