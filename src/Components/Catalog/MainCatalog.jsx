import { useState, useEffect, useContext } from 'react';
import { FavoritesContext } from '../../FavContext';
import favIcon from "../../../assets/icons/fav.svg";
import favoritedIcon from '../../../assets/icons/add-fav.svg';
import { MainCatalog } from "../../Data/MainCatalog";
import { CartContext } from '../../CartContext';
import FilterSidebars from './FilterSidebars';
import "./MainCatalog.css"

export const Catalog = () => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState('');
  const [selectedSex, setSelectedSex] = useState('');
  const [showBrands, setShowBrands] = useState(false);
  const [showSizes, setShowSizes] = useState(false);
  const [showColors, setShowColors] = useState(false);
  const [showAvailability, setShowAvailability] = useState(false);
  const [showSuccessMessageCart, setShowSuccessMessageCart] = useState(false);
  const [showFavoriteMessage, setShowFavoriteMessage] = useState(false);
  const [showRemoveMessageCart, setShowRemoveMessageCart] = useState(false);
  const [showSex, setShowSex] = useState(false);
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

    const filtered = applyFilters(MainCatalog);
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
    setFilteredProducts(MainCatalog);
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
    <div className="test"></div>
    <div className="summer-collection-men-men">
      <div className='catalog-main-img-text'>Sale</div>
      <div className='catalog-main-img-text2'>up to</div>
      <div className='catalog-main-img-text3'>60%</div>
    </div>
    <FilterSidebars
      minPrice={minPrice}
      setMinPrice={setMinPrice}
      maxPrice={maxPrice}
      setMaxPrice={setMaxPrice}
      selectedBrands={selectedBrands}
      setSelectedBrands={setSelectedBrands}
      sortOrder={sortOrder}
      setSortOrder={setSortOrder}
      selectedSex={selectedSex}
      setSelectedSex={setSelectedSex}
      showBrands={showBrands}
      setShowBrands={setShowBrands}
      showSizes={showSizes}
      setShowSizes={setShowSizes}
      showColors={showColors}
      setShowColors={setShowColors}
      showAvailability={showAvailability}
      setShowAvailability={setShowAvailability}
      showSex={showSex}
      setShowSex={setShowSex}
      resetFilters={resetFilters}
      handleBrandSearch={handleBrandSearch}
      toggleBrandSelection={toggleBrandSelection}
      sizes={sizes}
      colors={colors}
      sex={sex}
      availability={availability}
      catalogData={MainCatalog}
      filteredProducts={filteredProducts}
      toggleCart={toggleCart}
      toggleFavorite={toggleFavorite}
      isInCart={isInCart}
      isFavorite={isFavorite}
      favoritedIcon={favoritedIcon}
      favIcon={favIcon}
      showSuccessMessageCart={showSuccessMessageCart}
      showFavoriteMessage={showFavoriteMessage}
      showRemoveMessageCart={showRemoveMessageCart}
      showRemoveFavoriteMessage={showRemoveFavoriteMessage}
    />
  </>
  );
};

