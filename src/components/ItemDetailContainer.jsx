import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Hook para obtener el parámetro de la URL

const ItemDetailContainer = () => {
    const { itemId } = useParams(); // Obtener el id del ítem
    const [item, setItem] = useState(null);

    useEffect(() => {
        // Lógica para cargar los detalles del ítem
        console.log(`Cargando detalles del producto: ${itemId}`);
        // Aquí podrías hacer una petición a la API o cargar desde un mock
        // Simulamos un producto
        const productoMock = {
            id: itemId,
            nombre: 'Producto ejemplo',
            descripcion: 'Descripción del producto ejemplo.',
            precio: 1000,
        };
        setItem(productoMock);
    }, [itemId]);

    return (
        <div>
            {item ? (
                <div>
                    <h2>{item.nombre}</h2>
                    <p>{item.descripcion}</p>
                    <p>Precio: ${item.precio}</p>
                </div>
            ) : (
                <p>Cargando detalles...</p>
            )}
        </div>
    );
}

export default ItemDetailContainer;