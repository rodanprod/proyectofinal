import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Item from '../Item/Item'; 
import './ItemListContainer.css';
import rtx3080 from '../../assets/img/png/products/rtx3080.png';
import hyperion from '../../assets/img/png/products/hyper.png';
import zephyrus from '../../assets/img/png/products/zephyrus.png';


const productosMock = [
    {
        id: 1,
        nombre: 'PC Armado',
        categoria: 'pc-armados',
        stock: 5,
        imagen: hyperion,
        descripcion: 'PC diseñado para alto rendimiento y gaming.',
        price: 2000,
    },
    {
        id: 2,
        nombre: 'Laptop ASUS ROG',
        categoria: 'laptops',
        stock: 3,
        imagen: zephyrus,
        descripcion: 'Laptop para gamers y profesionales.',
        price: 3400,
    },
    {
        id: 3,
        nombre: 'Tarjeta Gráfica RTX 3080',
        categoria: 'piezas',
        stock: 8,
        imagen: rtx3080,
        descripcion: 'Tarjeta gráfica de última generación para gaming.',
        price: 1800,
    }
];

const ItemListContainer = ({ saludo }) => {
    const { categoryId } = useParams();
    const [productos, setProductos] = useState([]);

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
                    <Item key={producto.id} producto={producto} />
                ))}
            </div>
        </div>
    );
};

export default ItemListContainer;