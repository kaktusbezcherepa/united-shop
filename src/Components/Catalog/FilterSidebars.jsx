import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import showFilters from "../../../assets/icons/show-filters.svg";
import hideFilters from "../../../assets/icons/hide-filters.svg";
import './FilterSidebars.css'

const FilterSidebars = ({
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  selectedBrands,
  setSortOrder,
  selectedSex,
  setSelectedSex,
  showBrands,
  showSizes,
  setShowSizes,
  showColors,
  setShowColors,
  showAvailability,
  setShowAvailability,
  showSex,
  setShowSex,
  resetFilters,
  handleBrandSearch,
  toggleBrandSelection,
  sizes,
  colors,
  sex,
  availability,
  catalogData,
  filteredProducts,
  toggleCart,
  toggleFavorite,
  isInCart,
  isFavorite,
  favoritedIcon,
  favIcon,
  showSuccessMessageCart,
  showFavoriteMessage,
  showRemoveMessageCart,
  showRemoveFavoriteMessage
}) => {
  return (
    <>
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
              {Array.from(new Set(catalogData.map(product => product.brand))).map(brandItem => (
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
              <Link to={`/main-catalog/product/${product.id}`}>
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
  )
}
FilterSidebars.propTypes = {
    minPrice: PropTypes.string.isRequired,
    setMinPrice: PropTypes.func.isRequired,
    maxPrice: PropTypes.string.isRequired,
    setMaxPrice: PropTypes.func.isRequired,
    selectedBrands: PropTypes.array.isRequired,
    setSelectedBrands: PropTypes.func.isRequired,
    sortOrder: PropTypes.string.isRequired,
    setSortOrder: PropTypes.func.isRequired,
    selectedSex: PropTypes.string.isRequired,
    setSelectedSex: PropTypes.func.isRequired,
    showBrands: PropTypes.bool.isRequired,
    setShowBrands: PropTypes.func.isRequired,
    showSizes: PropTypes.bool.isRequired,
    setShowSizes: PropTypes.func.isRequired,
    showColors: PropTypes.bool.isRequired,
    setShowColors: PropTypes.func.isRequired,
    showAvailability: PropTypes.bool.isRequired,
    setShowAvailability: PropTypes.func.isRequired,
    showSex: PropTypes.bool.isRequired,
    setShowSex: PropTypes.func.isRequired,
    resetFilters: PropTypes.func.isRequired,
    handleBrandSearch: PropTypes.func.isRequired,
    toggleBrandSelection: PropTypes.func.isRequired,
    sizes: PropTypes.array.isRequired,
    colors: PropTypes.array.isRequired,
    sex: PropTypes.array.isRequired,
    availability: PropTypes.array.isRequired,
    catalogData: PropTypes.array.isRequired,
    filteredProducts: PropTypes.array.isRequired,
    toggleCart: PropTypes.func.isRequired,
    toggleFavorite: PropTypes.func.isRequired,
    isInCart: PropTypes.func.isRequired,
    isFavorite: PropTypes.func.isRequired,
    favoritedIcon: PropTypes.string.isRequired,
    favIcon: PropTypes.string.isRequired,
    showSuccessMessageCart: PropTypes.bool.isRequired,
    showFavoriteMessage: PropTypes.bool.isRequired,
    showRemoveMessageCart: PropTypes.bool.isRequired,
    showRemoveFavoriteMessage: PropTypes.bool.isRequired,
};

export default FilterSidebars