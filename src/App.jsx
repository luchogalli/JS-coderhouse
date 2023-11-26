import React, { useState, useEffect } from 'react';
import Navbar from './assets/components/NavBar.jsx';
import Catalog from './assets/components/Catalogo.jsx';
import Contacto from './assets/components/contacto.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetail from './assets/components/ProductDetail.jsx';
import Home from './assets/components/home..jsx'; 
import CheckoutPage from './assets/components/checkout.jsx';
import Categoria from './assets/components/Categoria.jsx';
import { getFirestore, collection, getDocs } from "firebase/firestore";
import './App.css';

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [selectedItems, setselectedItems] = useState([]);
  
  const [listDocus, setListDocus] = useState([]); 
 
  const [listCatego, setListCatego] = useState([]); 

  useEffect(() => {
    async function FetchCategories() {
      const db = getFirestore();

      const coleccionFB = collection(db, "categorias");
      const Docus = await getDocs(coleccionFB);
      const categoriesData = Docus.docs.map(doc => {
        const data = doc.data();
        return { ...data, id: doc.id };
      });
      setListCatego(categoriesData); 
    }
    FetchCategories();
  }, []);


  useEffect(() => {
    async function FetchProducts() {
      const db = getFirestore();

      const coleccionFB = collection(db, "productos");
      const Docus = await getDocs(coleccionFB);
      const categoriesData = Docus.docs.map(doc => {
        const data = doc.data();
        return { ...data, id: doc.id };
      });
      setListDocus(categoriesData); 
      console.log(categoriesData);
    }
    FetchProducts();
  }, []);

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
          <Route path="/Categoria" element={<Categoria categories={listCatego}/>} />
          <Route path="/Categoria/:categoriaID" element={<Catalog products={listDocus} categories={listCatego} />} />
          <Route
            path="/Categoria/:categoriaID/:id"
            element={
              <ProductDetail
                products={listDocus}
                addItem={additem}
              />
            }
          />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/checkout" element={<CheckoutPage poductsToBuy={selectedItems} products={listDocus}/>} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
