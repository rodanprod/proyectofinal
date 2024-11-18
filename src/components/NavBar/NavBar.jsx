import React from 'react';
import CartWidget from '../CartWidget/CartWidget'; 
import { Link } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import logo from '../../assets/img/RodanTech.png'; 
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                {/* Logo reemplazando el título */}
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="RodanTech Logo" className="navbar-logo" />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/pc-armados">PC's Armados</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/laptops">Laptops</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/piezas">Piezas</Link>
                        </li>
                    </ul>
                </div>
                <CartWidget />
            </div>
        </nav>
    );
};

export default NavBar;