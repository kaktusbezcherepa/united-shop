import  { useState, useEffect, useContext } from 'react';
import "./CatalogForMen.css";
import { FavoritesContext } from '../../FavContext';
import favIcon from "../../../assets/icons/fav.svg";
import favoritedIcon from '../../../assets/icons/add-fav.svg';
import { Link } from 'react-router-dom';
import { productsData } from '../../productsData';
import { CartContext } from '../../CartContext';

const CatalogForMen = () => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [brand, setBrand] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState('');
  const [showBrands, setShowBrands] = useState(false); 
  const [showSuccessMessageCart, setShowSuccessMessageCart] = useState(false);
  const [showFavoriteMessage, setShowFavoriteMessage] = useState(false);
  const [showRemoveMessageCart, setShowRemoveMessageCart] = useState(false);
  const [showRemoveFavoriteMessage, setShowRemoveFavoriteMessage] = useState(false);
  const { favorites, addFavorite, isFavorite, removeFavorite } = useContext(FavoritesContext);
  const { cart, addCart, isInCart, removeCart } = useContext(CartContext);


  useEffect(() => {
    const applyFilters = (products) => {
      let filtered = [...products];

      if (minPrice) {
        filtered = filtered.filter(product => product.price >= Number(minPrice));
      }

      if (maxPrice) {
        filtered = filtered.filter(product => product.price <= Number(maxPrice));
      }

      if (brand) {
        filtered = filtered.filter(product => product.brand.toLowerCase().includes(brand.toLowerCase()));
      }

      if (sortOrder === 'asc') {
        filtered.sort((a, b) => a.price - b.price);
      } else if (sortOrder === 'desc') {
        filtered.sort((a, b) => b.price - a.price);
      }

      return filtered;
    };

    const filtered = applyFilters(productsData);
    setFilteredProducts(filtered);
  }, [minPrice, maxPrice, brand, sortOrder, favorites, cart]);

  const handleBrandSearch = () => {
    setShowBrands(!showBrands);
  };

  const resetFilters = () => {
    setMinPrice('');
    setMaxPrice('');
    setBrand('');
    setSortOrder('');
    setShowBrands(false);
    setFilteredProducts(productsData);
  };

  const toggleFavorite = (product) => {
    if (isFavorite(product.id)) {
      removeFavorite(product.id);
      setShowRemoveFavoriteMessage(true);
    } else {
      addFavorite(product);
      setShowFavoriteMessage(true);
    }
  };

  const toggleCart = (product) => {
    if (isInCart(product.id)) {
      removeCart(product.id);
      setShowRemoveMessageCart(true);
    } else {
      addCart(product);
      setShowSuccessMessageCart(true);
    }
  };
  
  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setShowSuccessMessageCart(false);
    }, 2000);
    
    return () => clearTimeout(timeoutId);
  }, [showSuccessMessageCart]);

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setShowFavoriteMessage(false);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [showFavoriteMessage]); 

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setShowRemoveMessageCart(false);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [showRemoveMessageCart]);

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setShowRemoveFavoriteMessage(false);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [showRemoveFavoriteMessage]);

  return (
    <>
      <div className="summer-collection-men">
        <div className="summer-collection-men-text">
          <h1>Summer Collection</h1>
          <h2 className='year-god'>2024</h2>
        </div>
      </div>
      <div className="filter-container">
        <input
          className='input-filter'
          min="0"
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          onWheel={(e) => e.target.blur()}
        />
        <input
          className='input-filter'
          min="0"
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          onWheel={(e) => e.target.blur()}
        />
        <button className="sort-buttons" onClick={handleBrandSearch}>Brand</button>
        {showBrands && (
          <div className="brand-list">
            {Array.from(new Set(productsData.map(product => product.brand))).map(brand => (
              <div key={brand} onClick={() => setBrand(brand)}>
                {brand}
              </div>
            ))}
          </div>
        )}
        <button className="sort-buttons sort-buttons-price-sort" onClick={() => setSortOrder('asc')}>Sort by price(low - max)</button>
        <button className="sort-buttons sort-buttons-price-sort" onClick={() => setSortOrder('desc')}>Sort by price(max - low)</button>
        <button className="sort-buttons" onClick={resetFilters}>Reset filter</button>
      </div>
      <div className="product-list">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <Link to={`/catalog/men/product/${product.id}`}>
              <img src={product.image} alt={`Изображение продукта ${product.name}`} />
            </Link>
            <div className="price-type-product-card">
              <p>{product.name}</p>
              <p className='price'>{product.price}$</p>
            </div>
            <div className="cart-brand">
            <p className='brand-name'>{product.brand}</p>
            <button className='add-to-cart' onClick={() => toggleCart(product)}>
              {isInCart(product.id) ? "Remove from cart" : "Add to cart"}
            </button>
            </div>
            <button type='button' className='fav-button' onClick={() => toggleFavorite(product)}>
              <img className='fav-icon' src={isFavorite(product.id) ? favoritedIcon : favIcon} alt="Add to favorites" />
            </button>
          </div>
        ))}
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

export default CatalogForMen;