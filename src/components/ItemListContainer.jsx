import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ItemListContainer.css'; 
import rtx3080 from '../assets/img/png/products/rtx3080.png';
import hyperion from '../assets/img/png/products/hyper.png';
import zephyrus from '../assets/img/png/products/zephyrus.png';

const ItemListContainer = ({ saludo }) => {
    const { categoryId } = useParams(); 
    const [productos, setProductos] = useState([]);

    const productosMock = [
        {
            id: 1,
            nombre: 'PC Armado',
            categoria: 'pc-armados',
            stock: 5,
            imagen: hyperion,
        },
        {
            id: 2,
            nombre: 'Laptop ASUS ROG',
            categoria: 'laptops',
            stock: 3,
            imagen: zephyrus,
        },
        {
            id: 3,
            nombre: 'Tarjeta Gráfica RTX 3080',
            categoria: 'piezas',
            stock: 8,
            imagen: rtx3080,
        }
    ];

    useEffect(() => {
        if (categoryId) {
            const productosFiltrados = productosMock.filter(producto => producto.categoria === categoryId);
            setProductos(productosFiltrados);
        } else {
            setProductos(productosMock);
        }
    }, [categoryId]); 

    return (
        <div className="item-list-container">
            <h1>{saludo}</h1>
            <div className="product-grid">
                {productos.map((producto) => (
                    <div key={producto.id} className="product-card">
                        <img src={producto.imagen} alt={producto.nombre} className="product-image" />
                        <h3>{producto.nombre}</h3>
                        <p>Stock disponible: {producto.stock}</p>
                        <a href={`/item/${producto.id}`}>Ver detalle del producto</a> 
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ItemListContainer;