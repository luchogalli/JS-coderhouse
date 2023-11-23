import React, { useState } from 'react'; 
import Navbar from './assets/components/NavBar.jsx';
import Catalog from './assets/components/Catalogo.jsx';
import Contacto from './assets/components/contacto.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { products } from './assets/components/Productos.jsx';
import ProductDetail from './assets/components/ProductDetail.jsx';
import Home from './assets/components/home..jsx'; 
import CheckoutPage from './assets/components/checkout.jsx';
import Categoria from './assets/components/Categoria.jsx';
import './App.css';

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [selectedItems, setselectedItems] = useState([]);
  
  const additem = (id) => {
    console.log(id);

 
    const newselecteditem=[...selectedItems,id];
    setselectedItems(newselecteditem);

    console.log(selectedItems);
    setCartCount(cartCount + 1);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar cartCount={cartCount} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Categoria" element={<Categoria products={products}/>} />
          <Route path="/Categoria/:categoriaID" element={<Catalog products={products} />} />
          <Route
            path="/Categoria/:categoriaID/:id"
            element={
              <ProductDetail
                products={products}
                addItem={additem}
              />
            }
          />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/checkout" element={<CheckoutPage poductsToBuy={selectedItems}/>} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
