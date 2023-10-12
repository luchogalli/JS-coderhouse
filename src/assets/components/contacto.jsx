import React from 'react';
import './Contacto.css'; 

const Contacto = () => {
  return (
    <div className="contact-container">
      <h2>Contacto</h2>
      <p>Si tienes alguna pregunta o comentario, no dudes en ponerte en contacto con nosotros.</p>
      <div className="contact-info">
        <h3>Información de Contacto</h3>
        <ul>
          <li>Correo electrónico: sinplata@pobre.com</li>
          <li>Teléfono: (123) 456-7890</li>
          <li>Dirección: Adentro del Obelisco</li>
        </ul>
      </div>
      <div className="contact-form">
        <h3>Formulario de Contacto</h3>
        <form>
          <div>
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" />
          </div>
          <div>
            <label htmlFor="correo">Correo Electrónico:</label>
            <input type="email" id="correo" name="correo" />
          </div>
          <div>
            <label htmlFor="mensaje">Mensaje:</label>
            <textarea id="mensaje" name="mensaje" rows="4" />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Contacto;