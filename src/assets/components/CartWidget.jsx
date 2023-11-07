import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; 
import './CartWidget.css';

const CartWidget = ({ cartCount }) => {
  return (
    <Link to="/checkout" className="cart-widget-button">
      <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
      <span className="badge badge-custom">{cartCount}</span>
    </Link>
  );
};

export default CartWidget;