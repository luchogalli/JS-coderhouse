import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductDetail.css';

const ProductDetail = ({ products, addItem }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id, 10));

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const GoBack = () => {
    navigate('/Catalogo');
  }

  const handleBuyClick = () => {
    addItem();
    setShowSuccessMessage(true);


    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 5000);
  }

  if (!product) {
    return <div>Producto no encontrado.</div>;
  }

  return (
    <div className="product-detail-container">
      <h2 className="product-title">Detalle del Producto</h2>
      <h3 className="product-name">{product.name}</h3>
      <img className="product-image" src={product.image} alt={product.name} />
      <p className="product-description">{product.description}</p>
      <div className="button-container">
        <button className="go-back-button" onClick={GoBack}>Go Back</button>
        <button className="buy-button" onClick={handleBuyClick}>Comprar</button>
      </div>
      {showSuccessMessage && <div className="success-message">Success</div>}
    </div>
  );
};

export default ProductDetail;
