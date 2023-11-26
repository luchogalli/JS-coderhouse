import React, { useState } from 'react';
import './checkout.css';


const CheckoutPage = ({ poductsToBuy, products }) => {

  const serviceCount = poductsToBuy.reduce((acc, serviceId) => {
    acc[serviceId] = (acc[serviceId] || 0) + 1;
    return acc;
  }, {});

  const totalCost = Object.entries(serviceCount).reduce((total, [serviceId, count]) => {
    const service = products.find(item => item.id === serviceId);
    if (service) {
      return total + (service.price * count);
    }
    return total;
  }, 0);

  const [userInformation, setUserInformation] = useState({
    name: '',
    email: '',
    address: '',
    paymentMethod: 'credit-card',
  });

  const handleUserInformationChange = (e) => {
    const { name, value } = e.target;
    setUserInformation({
      ...userInformation,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  
    const alertContainer = document.createElement('div');
    alertContainer.className = 'alert-container';

    
    const alertTitle = document.createElement('h2');
    alertTitle.className = 'alert-title';
    alertTitle.textContent = 'Gracias por su compra';

    
    const alertMessage = document.createElement('p');
    alertMessage.className = 'alert-message';
    alertMessage.textContent = 'Nos pondremos en contacto para coordinar la entrega del vahiculo';

    
    const closeButton = document.createElement('button');
    closeButton.className = 'alert-button';
    closeButton.textContent = 'OK';
    closeButton.addEventListener('click', () => {
      alertContainer.remove();
      window.location.href = '/';
    });

    alertContainer.appendChild(alertTitle);
    alertContainer.appendChild(alertMessage);
    alertContainer.appendChild(closeButton);

    
    document.body.appendChild(alertContainer);
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <div className="cart-summary">
        {}
        <h3>Resumen</h3>
        <ul>
          {Object.entries(serviceCount).map(([serviceId, count]) => {
            const service = products.find(item => item.id === serviceId);
            if (service) {
              return (
                <li key={serviceId}>
                  <p>{service.name} x{count}</p>
                  <p>Precio: ${service.price}</p>
                  <p>Total: ${service.price * count}</p>
                </li>
              );
            }
            return null; 
          })}
        </ul>
        <p>Total: ${totalCost}</p>
      </div>
      <form onSubmit={handleSubmit}>
        <h3>Informacion del comprador</h3>
        <div className="form-group">
          <label>Nombre:</label>
          <input
            type="text"
            name="name"
            value={userInformation.name}
            onChange={handleUserInformationChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={userInformation.email}
            onChange={handleUserInformationChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Direccion:</label>
          <textarea
            name="address"
            value={userInformation.address}
            onChange={handleUserInformationChange}
            required
          />
        </div>
        <h3>Informacion de pago</h3>
        <div className="form-group">
          <label>Forma:</label>
          <select
            name="paymentMethod"
            value={userInformation.paymentMethod}
            onChange={handleUserInformationChange}
          >
            <option value="credit-card">Tarjeta de credito</option>
            <option value="bank">Transferencia bancaria</option>
            {}
          </select>
        </div>
        <button type="submit">Finalizar la compra</button>
      </form>
    </div>
  );
};

export default CheckoutPage;
