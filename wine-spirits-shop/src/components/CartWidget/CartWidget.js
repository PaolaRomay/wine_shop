import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';

import './CartWidget.css';
import ItemCount from '../ItemCount/ItemCount';
import { contexto } from '../CartContext/CartProvider';

const CartWidget = () => {
  const { totalQuantity} = useContext(contexto);

  return (
    <>
    {
      (totalQuantity < 1) ? (
        <div></div>
      ) : (
        <div className="cart-widget">
          <Link to="/detalle/cart">
            <FontAwesomeIcon icon={faShoppingCart}  size="2x" color="black"/>
            <div className="qty-display">{totalQuantity}</div>
          </Link>
        </div>
      )
    }
    </>
  );
};

export default CartWidget;

