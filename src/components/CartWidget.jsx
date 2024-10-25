import React from 'react';
import iconCart from './assets/img/png/cart.png'; 

const CartWidget = () => {
    return (
        <div className="cart-widget">
            <img src={iconCart} width={50} alt="Cart" />
            <span className="badge bg-secondary">3</span>
        </div>
    );
}

export default CartWidget;
