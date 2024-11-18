import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom'; 
import './Checkout.css';

const Checkout = () => {
    const { cartItems, clearCart, getTotalPrice, getTotalItems } = useContext(CartContext);
    const navigate = useNavigate(); 

    const handleConfirmPurchase = () => {
        if (cartItems.length > 0) {
            alert(`¡Gracias por tu compra! El total a pagar es: $${getTotalPrice()}`);
            clearCart(); 
            navigate('/'); 
        } else {
            alert('El carrito está vacío. Por favor, añade productos antes de confirmar.');
        }
    };

    return (
        <div className="checkout">
            <h1>Carrito de Compras</h1>
            <h2>Total de productos en el carrito: {getTotalItems()}</h2>
            {cartItems.length > 0 ? (
                <div>
                    {cartItems.map((item) => (
                        <div key={item.id} className="checkout-item">
                            <h3>{item.nombre}</h3>
                            <p>Cantidad: {item.cantidad}</p>
                            <p>Precio Unitario: ${item.price}</p>
                            <p>Total por producto: ${item.cantidad * item.price}</p>
                        </div>
                    ))}
                    <h2>Total a pagar: ${getTotalPrice()}</h2>
                    <button onClick={clearCart} className="checkout-button">
                        Vaciar Carrito
                    </button>
                    <button
                        onClick={handleConfirmPurchase}
                        className="checkout-button finalize-button"
                    >
                        Confirmar Compra
                    </button>
                </div>
            ) : (
                <p>No hay productos en el carrito.</p>
            )}
        </div>
    );
};

export default Checkout;