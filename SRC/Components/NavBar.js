import React from 'react';
import CartWidget from './CartWidget';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Mi Tienda</a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Productos</a>
          </li>
          <li className="nav-item">
            <CartWidget />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;