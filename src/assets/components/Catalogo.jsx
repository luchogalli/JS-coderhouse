import React from 'react';
import { Link } from 'react-router-dom';
import './Catalogo.css'; 
const Catalog = ({ products }) => {
  return (
    <div className="catalog-container">
      <h2>Catálogo de Productos</h2>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/Catalogo/${product.id}`} className="product-link">
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Catalog;
