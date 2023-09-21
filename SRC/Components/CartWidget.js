import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
  const itemCount = 5; // Número hardcodeado (cambiar según sea necesario)

  return (
    <div className="cart-widget">
      <FontAwesomeIcon icon={faShoppingCart} />
      <span className="badge badge-primary">{itemCount}</span>
    </div>
  );
};

export default CartWidget;