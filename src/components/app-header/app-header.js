import React from 'react';
import cartIcon from './shopping-cart-solid.svg';
import './app-header.scss';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';


const AppHeader = ({ summaryPrice }) => {
  return (
    <header className="header">
      <Link className="header__link" to={"/"}>
        Menu
      </Link>
      <Link className="header__link" to="/cart">
        <img className="header__cart" src={cartIcon} alt="cart"></img>
        Total: {summaryPrice} $
      </Link>
    </header>
  );
};

const mapStateToProps = ({ summaryPrice }) => {
  return {
    summaryPrice,
  };
};


export default connect(mapStateToProps)(AppHeader);