import { useParams } from 'react-router-dom';
import { productsData } from '../../productsData.js';
import { useContext, useState, useEffect } from 'react';
import { FavoritesContext } from '../../FavContext.jsx';
import { CartContext } from '../../CartContext.jsx';
import Exit from "../../../assets/icons/exit.svg"
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
      setShowSuccessMessageCart(false); 
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
            <div key={product.id} className="product-card">
              <img src={product.image} alt={`Изображение продукта ${product.name}`} />
              <div className="price-type-product-card">
                <p>{product.name}</p>
                <p className='price'>{product.price}$</p>
              </div>
              <div className="cart-brand">
                <p className='brand-name'>{product.brand}</p>
                <button className='add-to-cart-fav' onClick={() => toggleCart(product)}>
                  {isInCartState ? "Remove from cart" : "Add to cart"}
                </button>
              </div>
              <button type='button' className='fav-button' onClick={() => removeFavorite(product.id)}>
                <img className='fav-icon-fav' src={Exit} alt="Remove from favorites" />
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