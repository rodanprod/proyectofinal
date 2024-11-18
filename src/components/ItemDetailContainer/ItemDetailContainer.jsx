import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import ItemQuantitySelector from "../Item/ItemQuantitySelector";
import { CartContext } from "../../context/CartContext"; 
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
    const { itemId } = useParams(); 
    const [item, setItem] = useState(null);
    const [quantity, setQuantity] = useState(1); 
    const { addToCart } = useContext(CartContext); 

    useEffect(() => {
        
        const productosMock = [
            {
                id: "1",
                nombre: "PC Armado",
                descripcion: "PC diseñado para alto rendimiento y gaming.",
                stock: 5,
                price: 2000,
                imagen: require("../../assets/img/png/products/hyper.png"),
            },
            {
                id: "2",
                nombre: "Laptop ASUS ROG",
                descripcion: "Laptop para gamers y profesionales.",
                stock: 3,
                price: 3400,
                imagen: require("../../assets/img/png/products/zephyrus.png"),
            },
            {
                id: "3",
                nombre: "Tarjeta Gráfica RTX 3080",
                descripcion: "Tarjeta gráfica de última generación para gaming.",
                stock: 8,
                price: 1800,
                imagen: require("../../assets/img/png/products/rtx3080.png"),
            },
        ];

        const productoEncontrado = productosMock.find((p) => p.id === itemId);
        setItem(productoEncontrado);
    }, [itemId]);

    const handleQuantityChange = (newQuantity) => {
        setQuantity(newQuantity); 
    };

    const handleAddToCart = () => {
        if (item && quantity > 0) {
            addToCart(item, quantity); 
            alert(`Se agregó ${quantity} unidad(es) de "${item.nombre}" al carrito.`);
        }
    };

    return (
        <div className="item-detail-container">
            {item ? (
                <div className="item-detail">
                    <img src={item.imagen} alt={item.nombre} className="item-detail-image" />
                    <h2>{item.nombre}</h2>
                    <p className="item-detail-description">{item.descripcion}</p>
                    <p className="item-detail-price">Precio: ${item.price}</p>
                    <p className="item-detail-stock">Stock disponible: {item.stock}</p>

                    {/* Selector de cantidad */}
                    <ItemQuantitySelector stock={item.stock} onQuantityChange={handleQuantityChange} />

                    {/* Mostrar cantidad seleccionada */}
                    <p className="item-detail-total">
                        Total por {quantity} unidad(es): ${quantity * item.price}
                    </p>

                    <button className="add-to-cart-button" onClick={handleAddToCart}>
                        Agregar al carrito
                    </button>
                </div>
            ) : (
                <p>Cargando detalles del producto...</p>
            )}
        </div>
    );
};

export default ItemDetailContainer;