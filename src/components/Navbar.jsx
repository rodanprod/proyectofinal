import React from 'react';
import CartWidget from './CartWidget'; 
import { Link } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de tener Bootstrap correctamente importado

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid justify-content-between">
                <h2>
                    <Link className="navbar-brand fs-3 text-uppercase" to="/">Cybermart de RodanTech</Link>
                </h2>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link ms-3" to="/category/pc-armados">PC's Armados</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ms-3" to="/category/laptops">Laptops</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ms-3" to="/category/piezas">Piezas</Link>
                        </li>
                    </ul>
                </div>
                <CartWidget /> 
            </div>
        </nav>
    );
}

export default NavBar;