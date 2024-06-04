import { useParams } from 'react-router-dom';
import { productsData } from '../../productsData.js';
import PropTypes from 'prop-types';


const ProductDetails = ({ productsData }) => {
  const { productId } = useParams();
  const product = productsData.find(p => p.id === parseInt(productId));
 
  return (
    <div>
      <h1>{product.name}</h1>
      <p>Price: {product.price}$</p>
      <p>Brand: {product.brand}</p>
    </div>
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