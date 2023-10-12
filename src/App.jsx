import React from 'react';
import Navbar from './assets/components/NavBar.jsx';
import ItemListContainer from './assets/components/ItemListContainer.jsx';
import Catalog from './assets/components/Catalogo.jsx';
import Contacto from './assets/components/contacto.jsx'; // Importa el componente de Contacto
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { products } from './assets/components/Productos.jsx';
import ProductDetail from './assets/components/ProductDetail.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/Home" element={<ItemListContainer greeting="¡Bienvenido a nuestra tienda en línea!" />} />
          <Route path="/Catalogo" element={<Catalog products={products} />} />
          <Route path="/Catalogo/:id" element={<ProductDetail products={products} />} />

          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;