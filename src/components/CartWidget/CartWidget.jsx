import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext'; // Importamos el contexto
import { Link } from 'react-router-dom'; // Para redirigir al carrito
import iconCart from '../../assets/img/png/cart.png'; // Tu ícono de carrito
import '../CartWidget/CartWidget.css'; // Opcional: estilos para CartWidget

const CartWidget = () => {
    const { getTotalItems } = useContext(CartContext); // Obtenemos el total de productos del carrito

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