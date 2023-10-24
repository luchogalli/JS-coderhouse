import React from 'react';
import CartWidget from './CartWidget';
import './NavBar.css';
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container"> 
        <a className="navbar-brand" href="#"></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto justify-content-center">
            <li className="nav-item">
            <Link to ={'/'}><a className="nav-link">Inicio</a></Link>
            </li>
            <li className="nav-item">
            <Link to ={'/Contacto'}><a className="nav-link">Contact Us</a></Link>
            </li>
            <li className="nav-item">
            <Link to ={'/Catalogo'}><a className="nav-link" href="catalogo">Productos</a></Link>
            </li>
            <li className="nav-item">
              <CartWidget />
            </li>
          </ul>
        </div>
      </div> 
    </nav>
  );
};

export default Navbar;