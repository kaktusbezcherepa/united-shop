// src/components/Cart/Cart.jsx
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../CartContext";
import { OrderContext } from "../../OrderContext";
import BackArrow from "../../../assets/icons/back-arrow.svg";
import "./Cart.css";

export const Cart = () => {
  const { cart, removeCart, increaseQuantity, decreaseQuantity, clearCart } = useContext(CartContext);
  const { addOrder } = useContext(OrderContext);
  const navigate = useNavigate();

  const [contactInfo, setContactInfo] = useState({ email: "", phone: "" });
  const [shippingAddress, setShippingAddress] = useState({
    firstName: "",
    lastName: "",
    country: "",
    state: "",
    address: "",
    city: "",
    postalCode: ""
  });
  const [showError, setShowError] = useState(false);
  const [errorText, setErrorText] = useState("");

  const handleContactChange = (e) => {
    setContactInfo({ ...contactInfo, [e.target.name]: e.target.value });
  };

  const handleShippingChange = (e) => {
    setShippingAddress({ ...shippingAddress, [e.target.name]: e.target.value });
  };

  const goBack = () => {
    navigate(-1);
  };

  const validateFields = () => {
    const areContactFieldsFilled = contactInfo.email && contactInfo.phone;
    const areShippingFieldsFilled = Object.values(shippingAddress).every(field => field);
    return areContactFieldsFilled && areShippingFieldsFilled;
  };

  const showErrorMessage = (message) => {
    setErrorText(message); // Set the error message text
    setShowError(true);
    setTimeout(() => {
      setShowError(false);
    }, 3000);
  };

  const placeOrder = () => {
    if (cart.length === 0) {
      showErrorMessage("Your cart is empty. Add some products before placing an order.");
      return;
    }

    if (!validateFields()) {
      showErrorMessage("Please fill out all fields.");
      return;
    }

    const newOrder = {
      id: Date.now(),
      items: cart,
      contactInfo,
      shippingAddress,
      totalPrice: totalInfo.totalPrice,
      totalQuantity: totalInfo.totalQuantity
    };

    addOrder(newOrder);
    clearCart();
    navigate("/orders");
  };

  const totalInfo = cart.reduce(
    (acc, product) => {
      acc.totalPrice += Number(product.price) * Number(product.quantity);
      acc.totalQuantity += Number(product.quantity);
      return acc;
    },
    { totalPrice: 0, totalQuantity: 0 }
  );

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
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={contactInfo.email}
              onChange={handleContactChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={contactInfo.phone}
              onChange={handleContactChange}
            />
          </div>
          <h2 className="cont-info ship">Shipping Address</h2>
          <div className="shipping-inputs">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={shippingAddress.firstName}
              onChange={handleShippingChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={shippingAddress.lastName}
              onChange={handleShippingChange}
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={shippingAddress.country}
              onChange={handleShippingChange}
            />
            <input
              type="text"
              name="state"
              placeholder="State/Region"
              value={shippingAddress.state}
              onChange={handleShippingChange}
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={shippingAddress.address}
              onChange={handleShippingChange}
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={shippingAddress.city}
              onChange={handleShippingChange}
            />
            <input
              type="text"
              name="postalCode"
              placeholder="Postal Code"
              value={shippingAddress.postalCode}
              onChange={handleShippingChange}
            />
          </div>
          <div className="total-info">
            <p>Total price: {totalInfo.totalPrice.toFixed(2)}$</p>
            <p>Total count: {totalInfo.totalQuantity}</p>
          </div>
          <button className="place-buntton-order" onClick={placeOrder}>Place Order</button>
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

      {showError && (
        <div className="error-popup">
          <p className="error-message">{errorText}</p>
        </div>
      )}
    </>
  );
};

export default Cart;