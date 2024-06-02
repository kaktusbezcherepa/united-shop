import { useState, useEffect } from 'react';
import "./CatalogForMen.css";
import Footer from "../Footer/Footer";

const productsData = [
  { id: 1, name: 'T-SHIRT', price: 322, image: '../../../assets/items/Rectangle 20.png', brand: "Rick Owens" },
  { id: 2, name: 'Vobla', price: 300, image: '../../../assets/items/Rectangle 20.png', brand: "Number 9" },
  { id: 3, name: 'Vobla', price: 200, image: '../../../assets/items/Rectangle 20.png', brand: "True Religion" },
  { id: 4, name: 'Vobla', price: 150, image: '../../../assets/items/Rectangle 20.png', brand: "Rick Owens" },
  { id: 5, name: 'Vobla', price: 100, image: '../../../assets/items/Rectangle 20.png', brand: "Number 9" },
  { id: 6, name: 'Vobla', price: 555, image: '../../../assets/items/Rectangle 20.png', brand: "Rick Owens" },
  { id: 7, name: 'Vobla', price: 231, image: '../../../assets/items/Rectangle 20.png', brand: "True Religion" },
  { id: 8, name: 'Vobla', price: 200, image: '../../../assets/items/Rectangle 20.png', brand: "True Religion" },
];

export const CatalogForMen = () => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [brand, setBrand] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [sortOrder, setSortOrder] = useState('');
  const [showBrands, setShowBrands] = useState(false);

  useEffect(() => {
    let sortedProducts = [...productsData];
    if (sortOrder === 'asc') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'desc') {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    setFilteredProducts(sortedProducts);
  }, [sortOrder]);

  useEffect(() => {
    let filtered = productsData;
    
    if (minPrice) {
      filtered = filtered.filter(product => product.price >= minPrice);
    }

    if (maxPrice) {
      filtered = filtered.filter(product => product.price <= maxPrice);
    }
    if(brand){
      filtered = filtered.filter(product => product.brand.toLowerCase().includes(brand.toLowerCase()));
    }
    setFilteredProducts(filtered);
  }, [minPrice, maxPrice, brand]);

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
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}$</p>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};