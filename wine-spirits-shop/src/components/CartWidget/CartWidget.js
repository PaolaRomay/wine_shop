import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';

import './CartWidget.css';

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <FontAwesomeIcon icon={faShoppingCart}  size="2x" color="black"/>
      <div className="qty-display">0</div>
    </div>
  );
};

export default CartWidget;
