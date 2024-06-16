import { useState, useEffect, useContext } from 'react';
import "../Components/Catalog/CatalogForMen";
import { FavoritesContext } from '../FavContext';
import favIcon from "../../assets/icons/fav.svg";
import favoritedIcon from '../../assets/icons/add-fav.svg';
import { Link } from 'react-router-dom';
import { WomenSummerData } from '../Data/SummerCollection';
import { CartContext } from '../CartContext';
import showFilters from "../../assets/icons/show-filters.svg";
import hideFilters from "../../assets/icons/hide-filters.svg";
import "./summercollection.css"

const Summercollection = () => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState('');
  const [selectedSex, setSelectedSex] = useState('');
  const [showSex, setShowSex] = useState(false);
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
  const sex = ['FEMALE', "MALE"]

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

      if (selectedSex) {
        filtered = filtered.filter(product => product.sex === selectedSex.toLowerCase());
      }

      if (sortOrder === 'asc') {
        filtered.sort((a, b) => a.price - b.price);
      } else if (sortOrder === 'desc') {
        filtered.sort((a, b) => b.price - a.price);
      }

      return filtered;
    };

    const filtered = applyFilters(WomenSummerData);
    setFilteredProducts(filtered);
  }, [minPrice, maxPrice, selectedBrands, sortOrder, favorites, cart, selectedSex]);

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
    setSelectedSex('');
    setShowBrands(false);
    setShowSizes(false);
    setShowColors(false);
    setShowAvailability(false);
    setFilteredProducts(WomenSummerData);
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
      <div className="new-summer-card">
        <div className="new-summer-card-text">
          <div>Summer Collection</div>
          <div>2024</div>
        </div>
      </div>
      <div className="catalog-layout">
        <div className="filter-container sticky-filter">
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
          <button className="brand-button" onClick={handleBrandSearch}>
            Brand
            <img className="filters-icon" src={showBrands ? hideFilters : showFilters} alt="Toggle Filters" />
          </button>
          {showBrands && (
            <div className="brand-list">
              {Array.from(new Set(WomenSummerData.map(product => product.brand))).map(brandItem => (
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
          <button className="brand-button" onClick={() => setShowSizes(!showSizes)}>
            Size
            <img className="filters-icon" src={showSizes ? hideFilters : showFilters} alt="Toggle Filters" />
          </button>
          {showSizes && (
            <div className="brand-list">
              {sizes.map(size => (
                <div key={size} className="size-item">
                  {size}
                </div>
              ))}
            </div>
          )}
          <button className="brand-button" onClick={() => setShowSex(!showSex)}>
            Sex
            <img className="filters-icon" src={showSex ? hideFilters : showFilters} alt="Toggle Filters" />
          </button>
          {showSex && (
            <div className="brand-list">
              {sex.map(sexItem => (
                <div
                  key={sexItem}
                  className={selectedSex === sexItem ? 'sex-item selected' : 'sex-item'}
                  onClick={() => setSelectedSex(sexItem)}
                >
                  {sexItem}
                </div>
              ))}
            </div>
          )} 
          <button className="brand-button" onClick={() => setShowColors(!showColors)}>
            Colors
            <img className="filters-icon" src={showColors ? hideFilters : showFilters} alt="Toggle Filters" />
          </button>
          {showColors && (
            <div className="brand-list">
              {colors.map(color => (
                <div key={color} className="color-item">
                  {color}
                </div>
              ))}
            </div>
          )}
          <button className="brand-button" onClick={() => setShowAvailability(!showAvailability)}>
            Availability
            <img className="filters-icon" src={showAvailability ? hideFilters : showFilters} alt="Toggle Filters" />
          </button>
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
              <Link to={`/summer-collection/product/${product.id}`}>
                <img src={product.image} alt={`Product ${product.name}`} className="product-image" />
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
      {showSuccessMessageCart && (
        <div className="success-message">
          Item added to cart!
        </div>
      )}
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
          Item removed from favorites!
        </div>
      )}
    </>
  );
};

export default Summercollection;