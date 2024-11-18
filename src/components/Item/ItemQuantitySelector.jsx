import React, { useState } from "react";
import "./ItemQuantitySelector.css"; // Asegúrate de tener este archivo

const ItemQuantitySelector = ({ stock, onQuantityChange }) => {
    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => {
        if (quantity < stock) {
            const newQuantity = quantity + 1;
            setQuantity(newQuantity);
            onQuantityChange(newQuantity);
        }
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            onQuantityChange(newQuantity);
        }
    };

    return (
        <div className="quantity-selector">
            <button onClick={handleDecrease} className="quantity-button">-</button>
            <span className="quantity-display">{quantity}</span>
            <button onClick={handleIncrease} className="quantity-button">+</button>
        </div>
    );
};

export default ItemQuantitySelector;