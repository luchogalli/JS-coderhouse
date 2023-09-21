// App.js

import React from 'react';
import Navbar from '../NavBar.jsx';
import ItemListContainer from '../ItemListContainer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda en línea!" />
    </div>
  );
}

export default App;
