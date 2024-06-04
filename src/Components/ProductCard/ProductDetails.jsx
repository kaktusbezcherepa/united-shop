import { useParams } from 'react-router-dom';
import { productsData } from '../../productsData.js';
import PropTypes from 'prop-types';

const ProductDetails = () => {
  const { productId } = useParams();
  const product = productsData.find(p => p.id === parseInt(productId));
 
  return (
    <>
      <div className="test"></div>
      <h1>{product.name}</h1>
      <p>Price: {product.price}$</p>
      <p>Brand: {product.brand}</p>
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