import React from 'react';
import './Footer.css'; // Importa los estilos del footer

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>© 2024 RodanTech. Todos los derechos reservados.</p>
                <p>Contacto: contacto@rodantech.com</p>
                <ul className="footer-links">
                    <li><a href="/privacy">Política de Privacidad</a></li>
                    <li><a href="/terms">Términos y Condiciones</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;