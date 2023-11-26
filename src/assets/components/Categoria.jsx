import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Categoria.css';
import { getFirestore, collection, getDocs } from "firebase/firestore";

const Categoria = ({ products }) => {
  const [listDocus, setListDocus] = useState([]); 

  useEffect(() => {
    async function FetchCategories() {
      const db = getFirestore();

      const coleccionFB = collection(db, "categorias");
      const Docus = await getDocs(coleccionFB);
      const categoriesData = Docus.docs.map(doc => {
        const data = doc.data();
        return { ...data, id: doc.id };
      });
      setListDocus(categoriesData); 
    }
    FetchCategories();
  }, []);

  return (
    <div className="catalog-container">
      <h2>Categorias de Productos</h2>
      <ul className="product-list">
        {listDocus.map((categoria) => (
          <li key={categoria.id} className="product-item">
            <Link to={`/Categoria/${categoria.id}`} className="product-link">
              <img src={categoria.image} alt={categoria.name} className="product-image" />
              <div className="product-name">{categoria.name}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categoria;
