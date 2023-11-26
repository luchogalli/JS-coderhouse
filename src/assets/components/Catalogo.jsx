import React from 'react';
import './Catalogo.css';
import { Link, useParams, useNavigate } from 'react-router-dom';

const Catalog = ({ products, categories }) => {
  const { categoriaID  } = useParams();
  const navigate = useNavigate();

  const selectedCategory = categories.find(category => category.id === categoriaID );

  const servicesToShow = products.filter(producto => {
    console.log(selectedCategory.products);
    return selectedCategory.products.includes(producto.id);
  });

  console.log("servicios a mostrar: " + servicesToShow);
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
