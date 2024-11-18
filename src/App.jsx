import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Checkout from './components/Checkout/Checkout';
import Footer from './components/Footer/Footer'; // Importa el Footer
import { CartProvider } from './context/CartContext'; // Importamos el CartProvider

function App() {
  return (
    <Router basename="/proyectofinal">
      <div className="App">
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<ItemListContainer saludo="¡Bienvenido al Cybermart de RodanTech!" />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Checkout />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;