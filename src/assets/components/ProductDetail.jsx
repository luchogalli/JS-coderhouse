import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductDetail.css';

const ProductDetail = ({ products }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id, 10));
  
  const GoBack = () => {
    navigate('/Catalogo')
  }

  if (!product) {
    return <div>Producto no encontrado.</div>;
  }

  return (
    <div>
      <h2>Detalle del Producto</h2>
      <h3>{product.name}</h3>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <button onClick={GoBack}>Go Back</button>
    </div>
  );
};

export default ProductDetail;