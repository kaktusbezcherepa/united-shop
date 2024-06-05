import { useParams } from 'react-router-dom';
import { productsData } from '../../productsData.js';
import { useContext, useState, useEffect } from 'react';
import { FavoritesContext } from '../../FavContext.jsx';
import { CartContext } from '../../CartContext.jsx';
import "./Fav.css";

export const Fav = () => {
  const { productId } = useParams();
  const product = productsData.find(p => p.id === parseInt(productId));
  const { removeFavorite, favorites } = useContext(FavoritesContext);
  const { addCart, isInCart, removeCart } = useContext(CartContext);  
  const [showSuccessMessageCart, setShowSuccessMessageCart] = useState(false);
  const [showFavoriteMessage, setShowFavoriteMessage] = useState(false);
  const [isInCartState, setIsInCartState] = useState(false);

  useEffect(() => {
    setIsInCartState(product && isInCart(product.id));
  }, [product, isInCart]);

  const toggleCart = (product) => {
    if (isInCartState) {
      removeCart(product.id);
      setShowSuccessMessageCart(false); // Hide success message
      setIsInCartState(false);
    } else {
      addCart(product);
      setShowSuccessMessageCart(true); 
      setIsInCartState(true);
    }
  };

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setShowSuccessMessageCart(false);
    }, 5000);
    
    return () => clearTimeout(timeoutId);
  }, [showSuccessMessageCart]);

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setShowFavoriteMessage(false);
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, [showFavoriteMessage, product]); 

  return (
    <>
    <div className="test"></div>
      <h1 className='fav-main-text'>favorites</h1>
    <div className="product-list-fav">
      <div className="favorites-list-added">
        {favorites.map(product => (
          <div key={product.id} className="favorite-item">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}$</p>
            <p>Brand: {product.brand}</p>
            <button onClick={() => removeFavorite(product.id)}>remove from fav</button>
            <button onClick={() => toggleCart(product)}>
              {isInCartState ? "Remove from cart" : "Add to cart"}
            </button>
          </div>
        ))}
      </div>
      </div>
      {showSuccessMessageCart && (
        <div className="success-message">
          Item added to cart
        </div>
      )}
      {showFavoriteMessage && (
        <div className="success-message">
         Item added to favorites!
        </div>
      )}
    </>
  );
};