import { useState, useEffect, useContext } from 'react';
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
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState('');
  const [showBrands, setShowBrands] = useState(false);
  const [showSizes, setShowSizes] = useState(false);
  const [showColors, setShowColors] = useState(false);
  const [showAvailability, setShowAvailability] = useState(false);
  const [showSuccessMessageCart, setShowSuccessMessageCart] = useState(false);
  const [showFavoriteMessage, setShowFavoriteMessage] = useState(false);
  const [showRemoveMessageCart, setShowRemoveMessageCart] = useState(false);
  const [showRemoveFavoriteMessage, setShowRemoveFavoriteMessage] = useState(false);
  const { favorites, addFavorite, isFavorite, removeFavorite } = useContext(FavoritesContext);
  const { cart, addCart, isInCart, removeCart } = useContext(CartContext);


  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
  const colors = ['Red', 'Blue', 'Green', 'Black', 'White'];
  const availability = ['In stock', 'Out of stock'];

  useEffect(() => {
    const applyFilters = (products) => {
      let filtered = [...products];

      if (minPrice) {
        filtered = filtered.filter(product => product.price >= Number(minPrice));
      }

      if (maxPrice) {
        filtered = filtered.filter(product => product.price <= Number(maxPrice));
      }

      if (selectedBrands.length > 0) {
        filtered = filtered.filter(product => selectedBrands.includes(product.brand));
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
  }, [minPrice, maxPrice, selectedBrands, sortOrder, favorites, cart]);

  const handleBrandSearch = () => {
    setShowBrands(!showBrands);
  };

  const toggleBrandSelection = (brandItem) => {
    const index = selectedBrands.indexOf(brandItem);
    if (index >= 0) {
      setSelectedBrands(selectedBrands.filter(brand => brand !== brandItem));
    } else {
      setSelectedBrands([...selectedBrands, brandItem]);
    }
  };

  const resetFilters = () => {
    setMinPrice('');
    setMaxPrice('');
    setSelectedBrands([]);
    setSortOrder('');
    setShowBrands(false);
    setShowSizes(false);
    setShowColors(false);
    setShowAvailability(false);
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
      <div className="catalog-layout">
        <div className="filter-container">
          <h2 className='sort-head'>Sort by</h2>
          <button className="sort-buttons sort-buttons-price-sort hover-sort" onClick={() => setSortOrder('asc')}>Sort by price (min - high)</button>
          <button className="sort-buttons sort-buttons-price-sort" onClick={() => setSortOrder('desc')}>Sort by price (high - min)</button>
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
          <h2 className='filters-head'>Filters</h2>
          <button className="brand-button" onClick={handleBrandSearch}>Brand</button>
          {showBrands && (
            <div className="brand-list">
              {Array.from(new Set(productsData.map(product => product.brand))).map(brandItem => (
                <div
                  key={brandItem}
                  className={selectedBrands.includes(brandItem) ? 'brand-item selected' : 'brand-item'}
                  onClick={() => toggleBrandSelection(brandItem)}
                >
                  {brandItem}
                </div>
              ))}
            </div>
          )}
          <button className='brand-button' onClick={() => setShowSizes(!showSizes)}>Size</button>
          {showSizes && (
            <div className="brand-list">
              {sizes.map(size => (
                <div key={size} className="size-item">
                  {size}
                </div>
              ))}
            </div>
          )}
          <button className='brand-button' onClick={() => setShowColors(!showColors)}>Colors</button>
          {showColors && (
            <div className="brand-list">
              {colors.map(color => (
                <div key={color} className="color-item">
                  {color}
                </div>
              ))}
            </div>
          )}
          <button className='brand-button' onClick={() => setShowAvailability(!showAvailability)}>Availability</button>
          {showAvailability && (
            <div className="brand-list">
              {availability.map(item => (
                <div key={item} className="availability-item">
                  {item}
                </div>
              ))}
            </div>
          )}
          <button className="sort-buttons" onClick={resetFilters}>Reset filters</button>
        </div>
        <div className="product-list">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <Link to={`/catalog/men/product/${product.id}`}>
                <img src={product.image} alt={`Product ${product.name}`} />
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
      </div>

      {showFavoriteMessage && (
        <div className="success-message">
          Item added to favorites!
        </div>
      )}
      {showRemoveMessageCart && (
        <div className="success-message">
          Item removed from cart!
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