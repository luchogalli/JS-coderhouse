import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductDetail.css';

const ProductDetail = ({ products, cartCount, setCartCount }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id, 10));

  const GoBack = () => {
    navigate('/Catalogo');
  }

  const [successMessage, setSuccessMessage] = useState(null);

  const handleBuyClick = () => {
    // Here, you can add logic to process the purchase. For example, updating the cart count.
    setCartCount(cartCount + 1);

    // Display the "Success" message
    setSuccessMessage('Success');
  }

  useEffect(() => {
    // Use the useEffect hook to remove the message after 5 seconds
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage(null);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [successMessage]);

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
        {successMessage && <div className="success-message">{successMessage}</div>}
      </div>
    </div>
  );
};

export default ProductDetail;
