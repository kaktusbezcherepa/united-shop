
import "./CatalogForMen.css";
import Footer from "../Footer/Footer";

const productsData = [
  { id: 1, name: 'T-SHIRT', price: '322$', image: '../../../assets/items/Rectangle 20.png',},
  { id: 2, name: 'Vobla', price: '223$', image: '../../../assets/items/Rectangle 20.png',},
  { id: 3, name: 'Vobla', price: '223$', image: '../../../assets/items/Rectangle 20.png',},
  { id: 4, name: 'Vobla', price: '223$', image: '../../../assets/items/Rectangle 20.png',},
  { id: 5, name: 'Vobla', price: '223$', image: '../../../assets/items/Rectangle 20.png',},
  { id: 6, name: 'Vobla', price: '223$', image: '../../../assets/items/Rectangle 20.png',},
  { id: 7, name: 'Vobla', price: '223$', image: '../../../assets/items/Rectangle 20.png',},
  { id: 8, name: 'Vobla', price: '223$', image: '../../../assets/items/Rectangle 20.png',},
];

export const CatalogForMen = () => {
  return (
    <>
      <div className="test"></div>
      <div className="summer-collection-men">
          <div className="summer-collection-men-text">
            <h1>Summer Collection</h1>
            <h2>2024</h2>
          </div>
      </div>
      <div className="product-list">
        {productsData.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
      <div className="zagla"></div>
      <Footer />
    </>
  );
};