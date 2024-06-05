import { useParams } from 'react-router-dom';
import { productsData } from '../../productsData.js';
import { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import "./ProductDetails.css"
import Fav from "../../../assets/icons/fav.svg"
import InFav from "../../../assets/icons/add-fav.svg"
import { FavoritesContext } from '../../FavContext.jsx';
import { CartContext } from '../../CartContext.jsx';

const ProductDetails = () => {
  const { productId } = useParams();
  const product = productsData.find(p => p.id === parseInt(productId));
  const { addFavorite, isFavorite, removeFavorite } = useContext(FavoritesContext);
  const { addCart, isInCart, removeCart } = useContext(CartContext); 
  const [isAddedToCart, setIsAddedToCart] = useState(false); 
  const [showSuccessMessageCart, setShowSuccessMessageCart] = useState(false);
  const [showFavoriteMessage, setShowFavoriteMessage] = useState(false);

  const toggleFavorite = (product) => {
    if (isFavorite(product.id)) {
      removeFavorite(product.id);
    } else {
      addFavorite(product);
      setShowFavoriteMessage(true); 
    }
  };

  const toggleCart = (product) => {
    if (isInCart(product.id)) {
      removeCart(product.id);
      setIsAddedToCart(false);
    } else {
      addCart(product);
      setIsAddedToCart(true);
      setShowSuccessMessageCart(true); 
    }
  };

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setShowSuccessMessageCart(false); // Исправлено имя состояния
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, [showSuccessMessageCart]);

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setShowFavoriteMessage(false);
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, [showFavoriteMessage, product]); // Добавьте product
 
  return (
    <>
      <div className="test"></div>
      <div className="card-container">
        
        <div className="img-card">
          <img src={product.image} alt="" />
        </div>
             <div className="card-info">
          <button onClick={() => toggleFavorite(product)} className="add-to-fav-card">
            <img className="add-to-fav-card-icon" src={isFavorite(product.id) ? InFav : Fav} alt="" />
          </button>
          <h1>{product.name}</h1>
          <p>Price: {product.price}$</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, amet nisi. Voluptatum, fugit! Provident, saepe.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat fugit, earum libero quos quibusdam temporibus!</p>
          <p className='where-from'>Made in Lorem.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est officiis architecto asperiores veniam animi labore necessitatibus provident itaque dolorum odit veritatis accusamus, sunt ipsum quis.</p>
          <p>Color</p>
          <p>Size</p>
          <div className="card-button-container">
            <button className="card-size-button">xs</button>
            <button className="card-size-button">s</button>
            <button className="card-size-button">m</button>
            <button className="card-size-button">l</button>
            <button className="card-size-button">xl</button>
            <button className="card-size-button">2x</button>
          </div>
          <p className='size-table'>FIND YOUR SIZE | MEASUREMENT GUIDE</p>
          <button onClick={() => toggleCart(product)} className={`add-to-cart-card ${isAddedToCart ? 'added' : 'add'}`}>
                {isAddedToCart ? "added" : "add"} 
          </button>
          
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

ProductDetails.propTypes = {
  productsData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    brand: PropTypes.string.isRequired,
  })).isRequired,
};

export default ProductDetails;