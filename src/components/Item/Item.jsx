import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Item.css';
import { CartContext } from '../../context/CartContext'; // Importamos el contexto

const Item = ({ producto }) => {
    const { addToCart } = useContext(CartContext); // Accedemos a la función para agregar al carrito

    return (
        <div className="item-card">
            <img src={producto.imagen} alt={producto.nombre} className="product-image" />
            <h3 className="product-title">{producto.nombre}</h3>
            <p className="product-stock">Stock disponible: {producto.stock}</p>
            <div className="product-actions">
                <Link to={`/item/${producto.id}`} className="item-detail-link">
                    Ver detalle del producto
                </Link>
                <button
                    className="add-to-cart"
                    onClick={() => addToCart(producto)} // Agregamos al carrito
                >
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
};

export default Item;