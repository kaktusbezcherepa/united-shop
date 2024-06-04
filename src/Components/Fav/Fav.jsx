import { useContext } from 'react';
import { FavoritesContext } from '../../FavContext'; // Убедитесь, что путь к FavContext корректен
import "./Fav.css"

export const Fav = () => {
  const { favorites, removeFavorite } = useContext(FavoritesContext);

  return (
    <>
      <div className="favorites-list">
        {favorites.map(product => (
          <div key={product.id} className="favorite-item">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}$</p>
            <p>Brand: {product.brand}</p>
            <button onClick={() => removeFavorite(product.id)}>remove from fav</button>
          </div>
        ))}
      </div>
    </>
  );
};