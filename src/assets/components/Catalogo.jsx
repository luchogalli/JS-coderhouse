  import React from 'react';
  import { Link } from 'react-router-dom';
  
  const Catalog = ({ products }) => {
    return (
      <div>
        <h2>Catálogo de Productos</h2>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <Link to={`/Catalogo/${product.id}`}>{product.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Catalog;
  
