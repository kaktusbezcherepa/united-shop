import { createContext, useState } from 'react';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = product => {
    setFavorites(prevFavorites => {
      const isProductInFavorites = prevFavorites.some(item => item.id === product.id);
      if (isProductInFavorites) {
        return prevFavorites;
      }
      return [...prevFavorites, product];
    });
  };

  const removeFavorite = productId => {
    setFavorites(prevFavorites =>
      prevFavorites.filter(product => product.id !== productId)
    );
  };

  const isFavorite = productId => {
    return favorites.some(product => product.id === productId);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
