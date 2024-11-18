import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext'; 
import { Link } from 'react-router-dom'; 
import iconCart from '../../assets/img/png/cart.png'; 
import '../CartWidget/CartWidget.css'; 

const CartWidget = () => {
    const { getTotalItems } = useContext(CartContext); 

    return (
        <div className="cart-widget">
            <Link to="/cart">
                <img src={iconCart} alt="Carrito" className="cart-icon" width={50} />
                {/* Mostramos el total de productos en el carrito si es mayor a 0 */}
                {getTotalItems() > 0 && <span className="badge bg-secondary">{getTotalItems()}</span>}
            </Link>
        </div>
    );
};

export default CartWidget;