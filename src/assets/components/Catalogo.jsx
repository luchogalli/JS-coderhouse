import React from 'react';
import { Link } from 'react-router-dom';
import './Catalogo.css';

const Catalog = ({ products }) => {
  return (
    <div className="catalog-container">
      <h2>Catálogo de Productos</h2>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id} className="product-item">
            <Link to={`/Catalogo/${product.id}`} className="product-link">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-name">{product.name}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Catalog;
