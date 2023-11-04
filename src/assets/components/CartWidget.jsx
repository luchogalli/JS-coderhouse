import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './CartWidget.css';

const CartWidget = ({ cartCount, setCartCount }) => {
  const handleCartClick = () => {
    // Increment the cart count
    setCartCount(cartCount + 1);
  };

  return (
    <div className="cart-widget" onClick={handleCartClick}>
      <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
      <span className="badge badge-custom">{cartCount}</span>
    </div>
  );
};

export default CartWidget;
