import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importamos las herramientas de enrutamiento
import NavBar from './components/Navbar'; 
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer'; // Importamos el contenedor de detalles del producto

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer saludo="¡Bienvenido al Cybermart de RodanTech!" />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;