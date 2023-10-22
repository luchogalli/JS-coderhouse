import React from 'react';
import Navbar from './assets/components/NavBar.jsx';
import Catalog from './assets/components/Catalogo.jsx';
import Contacto from './assets/components/contacto.jsx'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { products } from './assets/components/Productos.jsx';
import ProductDetail from './assets/components/ProductDetail.jsx';
import Home from '../src/assets/components/home..jsx'; // Importa el componente Home
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/Home" element={<Home />} /> {/* Agrega la ruta para la página de inicio */}
          <Route path="/Catalogo" element={<Catalog products={products} />} />
          <Route path="/Catalogo/:id" element={<ProductDetail products={products} />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;