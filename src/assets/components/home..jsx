import React from 'react';
import './home.css';

const Home = () => {
  return (
    <div className="home-container" id="home-container">
      <h1 className="home-title">Bienvenido al Concesionario BMW</h1>
      <p className="home-description">Descubre la elegancia y el rendimiento de los vehículos BMW.</p>
      <img
        src="https://cdn.dicklovett.co.uk/uploads/header_image/2_90_l.jpg?v=1643385270"
        alt="BMW"
        className="bmw-image"
        id="bmw-image"
      />
    </div>
  );
};

export default Home;