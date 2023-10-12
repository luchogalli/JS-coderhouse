  import React from 'react';
  import { useParams } from 'react-router-dom';
  
  const ProductDetail = ({ products }) => {
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id, 10));
  
    if (!product) {
      return <div>Producto no encontrado.</div>;
    }
  
    return (
      <div>
        <h2>Detalle del Producto</h2>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
      </div>
    );
  };
  
  export default ProductDetail;