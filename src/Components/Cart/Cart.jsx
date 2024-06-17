import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../CartContext";
import BackArrow from "../../../assets/icons/back-arrow.svg";
import "./Cart.css";

export const Cart = () => {
  const { cart, removeCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  
  const totalInfo = cart.reduce((acc, product) => {
    acc.totalPrice += Number(product.price) * Number(product.quantity);
    acc.totalQuantity += Number(product.quantity);
    return acc;
  }, { totalPrice: 0, totalQuantity: 0 });

  return (
    <>
    <div className="test"></div>
      <div className="cart-head">
        <button className="back-to-store-cart-button" onClick={goBack}>
          <img className="back-arrow-button-cart" src={BackArrow} alt="Back arrow" />
          back to store
        </button>
        <h2 className="cart-checkout">checkout</h2>
      </div>

      <div className="mega-test">
        <div className="info-block">
          <h2 className="cont-info">Contact info</h2>
          <div className="inputs">
            <input type="email" placeholder="Email" />
            <input type="tel" placeholder="Phone" />
          </div>
          <h2 className="cont-info ship">Shipping Address</h2>
          <div className="shipping-inputs">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="text" placeholder="Country" />
            <input type="text" placeholder="State/Region" />
            <input type="text" placeholder="Address" />
            <input type="text" placeholder="City" />
            <input type="text" placeholder="Postal Code" />
          </div>
          <div className="total-info">
            <p>Total price: {totalInfo.totalPrice}$</p>
            <p>Total count: {totalInfo.totalQuantity}</p>
          </div>
          <button className="place-buntton-order">Place Order</button>
        </div>

        <div className="cart-list">
          <p className="order">Your order</p>
          {cart.length > 0 ? (
            cart.map((product) => {
              const totalPrice = Number(product.price) * Number(product.quantity);
              return (
                <div key={product.id} className="cart-item">
                  <button
                    className="remove-button"
                    onClick={() => removeCart(product.id)}
                  >
                    Delete from cart
                  </button>
                  <img src={product.image} alt={product.name} />
                  <div className="cart-item-info">
                    <h3>{product.name}</h3>
                    <p>Brand: {product.brand}</p>
                    <div className="quantity-controls">
                      <button onClick={() => decreaseQuantity(product.id)}>−</button>
                      <span>{product.quantity}</span>
                      <button onClick={() => increaseQuantity(product.id)}>+</button>
                    </div>
                  </div>
                  <p className="cart-item-price">${totalPrice.toFixed(2)}</p>
                </div>
              );
            })
          ) : (
            <p className="empty-cart">Your cart is empty</p>
          )}
        </div>
            
        
      </div>
    </>
  );
};