import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './CartWidget.css';

const CartWidget = ({ cartCount}) => {


  return (
    <div className="cart-widget" >
      <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
      <span className="badge badge-custom">{cartCount}</span>
    </div>
  );
};

export default CartWidget;
