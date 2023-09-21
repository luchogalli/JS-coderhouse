// App.js

import React from 'react';
import Navbar from './Navbar';
import ItemListContainer from './ItemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda en línea!" />
    </div>
  );
}

export default App;
