import React from 'react';
import './Catalogo.css';
import { categorias }  from '../data/Categorias.js';
import { Link, useParams, useNavigate } from 'react-router-dom';

const Catalog = ({ products }) => {
  const { categoriaID  } = useParams();
  const navigate = useNavigate();
  const selectedCategory = categorias.find(category => category.id === categoriaID );
  const servicesToShow = products.filter(producto => selectedCategory.products.includes(producto.id));
  return (
    <div className="catalog-container">
      <h2>Catálogo de Productos</h2>
      <ul className="product-list">
        {servicesToShow.map((product) => (
          <li key={product.id} className="product-item">
            <Link to={`/Categoria/${categoriaID}/${product.id}`} className="product-link">
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
