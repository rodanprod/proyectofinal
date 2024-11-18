import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (producto, quantity = 1) => {
        setCartItems((prevItems) => {
            const itemInCart = prevItems.find((item) => item.id === producto.id);
            if (itemInCart) {
                return prevItems.map((item) =>
                    item.id === producto.id
                        ? { ...item, cantidad: item.cantidad + quantity }
                        : item
                );
            }
            return [...prevItems, { ...producto, cantidad: quantity }];
        });
    };

    const clearCart = () => setCartItems([]);

    const getTotalPrice = () =>
        cartItems.reduce((total, item) => total + item.cantidad * item.price, 0);

    const getTotalItems = () =>
        cartItems.reduce((total, item) => total + item.cantidad, 0);

    return (
        <CartContext.Provider
            value={{ cartItems, addToCart, clearCart, getTotalPrice, getTotalItems }}
        >
            {children}
        </CartContext.Provider>
    );
};