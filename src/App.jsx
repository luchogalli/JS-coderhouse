import React, { useState } from 'react'; // First import React
import Navbar from './assets/components/NavBar.jsx';
import Catalog from './assets/components/Catalogo.jsx';
import Contacto from './assets/components/contacto.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { products } from './assets/components/Productos.jsx';
import ProductDetail from './assets/components/ProductDetail.jsx';
import Home from './assets/components/home..jsx'; // Also update the import path
import './App.css';

function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar cartCount={cartCount} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Catalogo" element={<Catalog products={products} />} />
          <Route
            path="/Catalogo/:id"
            element={
              <ProductDetail
                products={products}
                cartCount={cartCount}
                setCartCount={setCartCount}
              />
            }
          />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
