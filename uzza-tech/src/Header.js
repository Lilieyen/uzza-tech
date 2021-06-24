import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
    const [ { basket , user} ] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <nav className="header">
          <Link to="/">
            <img 
                className="header__logo"
                src="https://i.postimg.cc/wTjMNCxk/5476406527-ab82ecf3-a46b-4899-a4f8-5c6b721d4ce5.png"
                alt=""
           />
          </Link>
          <link rel="icon" href="https://i.postimg.cc/wTjMNCxk/5476406527-ab82ecf3-a46b-4899-a4f8-5c6b721d4ce5.png"/>

        <div
            className="header__search">
                <input
                className="header__searchInput"
                type="text" />
                <SearchIcon className="header__searchIcon" />
        </div>

        <div className="header__nav">
           <Link to={!user && "/login"}>
              <div onClick={handleAuthentication}
              className="header__option">
            {/* user?.email || 'Guest' */}
            <span
            className='header__optionLineOne'>Hello {!user ? 'Guest' : user.email}</span>
            <span
            className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
              </div>
            </Link>
        <Link to="/orders">
            <div className="header__option">
                <span
                className='header__optionLineOne'>Returns</span>
                <span
                className="header__optionLineTwo">& Orders</span>
            </div>
        </Link>

        <div className="header__option">
            <span
            className='header__optionLineOne'>Your</span>
            <span
            className="header__optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
        <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo 
            header__basketCount">
                {basket?.length}
            </span>
        </div>
        </Link>
        <Link to="/about">
        <div className="header__about">
            
            <span className='header__optionLineTwo'>ABOUT 
            </span>
        </div>
        </Link>
       </div>
     </nav>   
       
    );
}

export default Header;