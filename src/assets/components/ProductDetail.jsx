import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductDetail.css';

const ProductDetail = ({ products }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id, 10));

  const GoBack = () => {
    navigate('/Catalogo');
  }

  const handleBuyClick = () => {
    // Aquí puedes agregar la lógica para procesar la compra del producto
    // Por ejemplo, redirigir a una página de compra o mostrar un mensaje de éxito.
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
    </div>
  );
};

export default ProductDetail;