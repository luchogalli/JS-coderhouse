import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container">
      <h1 className="mt-5">{greeting}</h1>
    </div>
  );
};

export default ItemListContainer;