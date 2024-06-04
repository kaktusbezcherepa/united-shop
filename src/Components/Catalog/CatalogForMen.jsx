import { useState, useEffect, useContext } from 'react';
import "./CatalogForMen.css";
import Footer from "../Footer/Footer";
import { FavoritesContext } from '../../FavContext';
import favIcon from "../../../assets/icons/fav.svg";
import favoritedIcon from '../../../assets/icons/add-fav.svg';
import { Link } from 'react-router-dom';
import { productsData } from '../../productsData';


export const CatalogForMen = () => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [brand, setBrand] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState('');
  const [showBrands, setShowBrands] = useState(false);
  const { addFavorite, isFavorite, removeFavorite } = useContext(FavoritesContext);

  useEffect(() => {
    const favoritesFromStorage = JSON.parse(localStorage.getItem('favorites') || '[]');
    let filtered = productsData.filter(product => favoritesFromStorage.includes(product.id));
  
    if (minPrice) {
      filtered = filtered.filter(product => product.price >= Number(minPrice));
    }
  
    if (maxPrice) {
      filtered = filtered.filter(product => product.price <= Number(maxPrice));
    }
  
    if (brand) {
      filtered = filtered.filter(product => product.brand.toLowerCase().includes(brand.toLowerCase()));
    }
  
    // Apply sorting only after filtering is done
    if (sortOrder === 'asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'desc') {
      filtered.sort((a, b) => b.price - a.price);
    }
  
    setFilteredProducts(filtered);
  }, [minPrice, maxPrice, brand, sortOrder]); // Removed filteredProducts from dependencies
  
  // Separate useEffect for syncing favorites to localStorage
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(filteredProducts.map(product => product.id)));
  }, [filteredProducts]);

  const handleBrandSearch = () => {
    setShowBrands(!showBrands);
  };
  
  const resetFilters = () => {
    setMinPrice('');
    setMaxPrice('');
    setBrand('');
    setSortOrder('');
    setShowBrands(false);
    const favoritesFromStorage = JSON.parse(localStorage.getItem('favorites') || '[]');
    const filtered = productsData.filter(product => favoritesFromStorage.includes(product.id));
    setFilteredProducts(filtered);
  };
  
  const toggleFavorite = (product) => {
    if (isFavorite(product.id)) {
      removeFavorite(product.id);
      const updatedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]').filter(id => id !== product.id);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    } else {
      addFavorite(product);
      const updatedFavorites = [...JSON.parse(localStorage.getItem('favorites') || '[]'), product.id];
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }
  };

  return (
    <>
      <div className="summer-collection-men">
        <div className="summer-collection-men-text">
          <h1>Summer Collection</h1>
          <h2>2024</h2>
        </div>
      </div>
      <div className="filter-container">
        <input className='input-filter'
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <input className='input-filter'
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
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
            <Link to={`/product/${product.id}`} key={product.id}>
            <img src={product.image} alt={`Изображение продукта ${product.name}`} />
            </Link>
            <div className="price-type-product-card">
              <p>{product.name}</p>
              <p className='price'>{product.price}$</p>
            </div>
            <p className='brand-name'>{product.brand}</p>
            <button type='button' alt="fav-button" className='fav-button' onClick={() => toggleFavorite(product)}>
              <img className='fav-icon' src={isFavorite(product.id) ? favoritedIcon : favIcon} alt="Add to favorites" />
            </button>
          
          </div>
        ))}
      </div> 
      <Footer /> 
    </>
  );
};