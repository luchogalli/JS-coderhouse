import React, { useState } from 'react';
import './checkout.css';
import { products } from './Productos';

const CheckoutPage = ({ poductsToBuy }) => {

  const serviceCount = poductsToBuy.reduce((acc, serviceId) => {
    acc[serviceId] = (acc[serviceId] || 0) + 1;
    return acc;
  }, {});

  const totalCost = Object.entries(serviceCount).reduce((total, [serviceId, count]) => {
    const service = products.find(item => item.id === parseInt(serviceId));
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
    alertMessage.textContent = 'Un representante se pondra en contacto.';

    
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
        <h3>Cart Summary</h3>
        <ul>
          {Object.entries(serviceCount).map(([serviceId, count]) => {
            const service = products.find(item => item.id === parseInt(serviceId));
            if (service) {
              return (
                <li key={serviceId}>
                  <p>{service.name} x{count}</p>
                  <p>Price: ${service.price}</p>
                  <p>Total: ${service.price * count}</p>
                </li>
              );
            }
            return null; 
          })}
        </ul>
        <p>Total Cost: ${totalCost}</p>
      </div>
      <form onSubmit={handleSubmit}>
        <h3>Shipping Information</h3>
        <div className="form-group">
          <label>Name:</label>
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
          <label>Address:</label>
          <textarea
            name="address"
            value={userInformation.address}
            onChange={handleUserInformationChange}
            required
          />
        </div>
        <h3>Payment Information</h3>
        <div className="form-group">
          <label>Payment Method:</label>
          <select
            name="paymentMethod"
            value={userInformation.paymentMethod}
            onChange={handleUserInformationChange}
          >
            <option value="credit-card">Credit Card</option>
            <option value="paypal">PayPal</option>
            {}
          </select>
        </div>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default CheckoutPage;
