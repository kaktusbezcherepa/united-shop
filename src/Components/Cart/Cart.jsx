import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../CartContext";
import BackArrow from "../../../assets/icons/back-arrow.svg";
import "./Cart.css";

export const Cart = () => {
  const { cart, removeCart } = useContext(CartContext);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="test"></div>
      <div className="cart-head">
        <button className="back-to-store-cart-button" onClick={goBack}>
          <img className="back-arrow-button-cart" src={BackArrow} alt="" />
          back to store
        </button>
        <h2 className="cart-checkout">checkout</h2>
      </div>


      <div className="cart-list">
        {cart.map((product) => (
          <div key={product.id} className="cart-item">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <p>Brand: {product.brand}</p>
            <button onClick={() => removeCart(product.id)}>remove from cart</button>
          </div>
        ))}
      </div>
    </>
  );
};