import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { categorias }  from '../data/Categorias.js';
import './Categoria.css';
import { doc, getDoc, getFirestore, collection, getDocs } from "firebase/firestore"

const Categoria = ({ products }) => {
    useEffect(() => {
      async function FetchCategories(){
        const db = getFirestore();
    
        const coleccionFB = collection(db, "categorias");
        const Docus = await getDocs (coleccionFB);
        const listDocus = Docus.docs.map(doc => doc.data());
        console.log(listDocus);
      }
      FetchCategories();
    }, []);

  return (
    <div className="catalog-container">
      <h2>Categorias de Productos</h2>
      <ul className="product-list">
        {categorias.map((categoria) => (
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