
import React from 'react';
import Navbar from './assets/components/NavBar.jsx';
import ItemListContainer from './assets/components/ItemListContainer.jsx';
import Catalog from './assets/components/Catalogo.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { products } from './assets/components/Productos.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Navbar />
      
        <Routes>
          <Route path="/Home" element={<ItemListContainer greeting="¡Bienvenido a nuestra tienda en línea!" />}></Route>
          <Route path="/Catalogo" element={<Catalog products={products}></Catalog>}></Route>
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
