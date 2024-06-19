import { useContext, useState, useEffect } from 'react';
import { FavoritesContext } from '../../FavContext.jsx';
import { CartContext } from '../../CartContext.jsx';
import { Link } from 'react-router-dom';
import Exit from "../../../assets/icons/exit.svg";
import "./Fav.css";
import { LimitedData } from '../../Data/LimitedData';
import { MainCatalog } from '../../Data/MainCatalog';
import { WomenSummerData } from '../../Data/SummerCollection';

export const Fav = () => {
  const { removeFavorite, favorites } = useContext(FavoritesContext);
  const { addCart, isInCart, removeCart } = useContext(CartContext);
  const [showSuccessMessageCart, setShowSuccessMessageCart] = useState(false);
  const [showRemoveMessageCart, setShowRemoveMessageCart] = useState(false);
  const [showRemoveFavoriteMessage, setShowRemoveFavoriteMessage] = useState(false);
  const [isInCartStates, setIsInCartStates] = useState({});

  useEffect(() => {
    const initialStates = {};
    favorites.forEach(product => {
      initialStates[product.id] = isInCart(product.id);
    });
    setIsInCartStates(initialStates);
  }, [favorites, isInCart]);

  const toggleCart = (product) => {
    if (isInCartStates[product.id]) {
      removeCart(product.id);
      setShowRemoveMessageCart(true);
      setIsInCartStates(prevStates => ({ ...prevStates, [product.id]: false }));
    } else {
      addCart(product);
      setShowSuccessMessageCart(true);
      setIsInCartStates(prevStates => ({ ...prevStates, [product.id]: true }));
    }
  };

  const handleRemoveFavorite = (productId) => {
    removeFavorite(productId);
    setShowRemoveFavoriteMessage(true);
  };

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setShowSuccessMessageCart(false);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [showSuccessMessageCart]);

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setShowRemoveMessageCart(false);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [showRemoveMessageCart]);

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setShowRemoveFavoriteMessage(false);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [showRemoveFavoriteMessage]);

  const getProductRoute = (productId) => {
    if (LimitedData.some(p => p.id === productId)) {
      return `/limited-catalog/product/${productId}`;
    } else if (MainCatalog.some(p => p.id === productId)) {
      return `/main-catalog/product/${productId}`;
    } else if (WomenSummerData.some(p => p.id === productId)) {
      return `/summer-collection/product/${productId}`;
    } else {
      return '#';
    }
  };

  return (
    <>
      <h1 className='fav-main-text'>favorites</h1>
      <div className="product-list-fav">
        <div className="favorites-list-added">
          {favorites.length === 0 ? (
            <p>No favorites added yet</p>
          ) : (
            favorites.map(product => (
              <div key={product.id} className="product-card">
                <Link to={getProductRoute(product.id)}>
                  <img src={product.image} alt={`Изображение продукта ${product.name}`} />
                </Link>
                <div className="price-type-product-card">
                  <p>{product.name}</p>
                  <p className='price'>{product.price}$</p>
                </div>
                <div className="cart-brand">
                  <p className='brand-name'>{product.brand}</p>
                  <button className='add-to-cart' onClick={() => toggleCart(product)}>
                    {isInCartStates[product.id] ? "Remove from cart" : "Add to cart"}
                  </button>
                </div>
                <button type='button' className='fav-button' onClick={() => handleRemoveFavorite(product.id)}>
                  <img id="fav-icon-fav-fav" className='fav-icon-fav' src={Exit} alt="Remove from favorites" />
                </button>
              </div>
            ))
          )}
        </div>
      </div>
      {showSuccessMessageCart && (
        <div className="success-message">
          Item added to cart
        </div>
      )}
      {showRemoveMessageCart && (
        <div className="success-message">
          Item removed from cart
        </div>
      )}
      {showRemoveFavoriteMessage && (
        <div className="success-message">
          Item removed from favorites
        </div>
      )}
    </>
  );
};