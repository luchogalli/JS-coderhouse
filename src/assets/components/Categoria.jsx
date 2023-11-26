import { Link } from 'react-router-dom';
import './Categoria.css';

const Categoria = ({ categories }) => {


  return (
    <div className="catalog-container">
      <h2>Categorias de Productos</h2>
      <ul className="product-list">
        {categories.map((categoria) => (
          <li key={categoria.id} className="product-item">
            <Link to={`/Categoria/${categoria.id}`} className="product-link">
              <img src={categoria.image} alt={categoria.name} className="product-image" />
              <div className="product-name">{categoria.name}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categoria;
