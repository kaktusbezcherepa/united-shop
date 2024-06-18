// src/components/Orders/Orders.jsx
import { useContext } from "react";
import { OrderContext } from "../../OrderContext";
import "./orders.css";
import { Link } from "react-router-dom";

export const Orders = () => {
  const { orders } = useContext(OrderContext);

  return (
    <>
      <div className="test"></div>
      <h1 className='profile-my-data'>profile</h1>
      <h2 className='my-data-text'>orders</h2>
      <div className="buttons-profile-container">
        <div className="buttons-profile3">
          <p className='profile-swap-win-button'>
            <Link to="/test" style={{ textDecoration: "none" }}>my data</Link>
          </p>
        </div>
        <div className="buttons-profile2">
          <p className='custom-varrior-button'>orders</p>
        </div>
        <div className="buttons-profile3">
          <p className='profile-swap-win-button'>
            <Link to="/clubcard" style={{ textDecoration: "none" }}>club cars</Link>
          </p>
        </div>
      </div>

      {orders.length > 0 ? (
        <div className="orders-wrapper">
          {orders.map((order) => (
            <div key={order.id} className="order-item">
              <h3>Order #{order.id}</h3>
              <p>Total Price: ${order.totalPrice.toFixed(2)}</p>
              <p>Total Quantity: {order.totalQuantity}</p>
              <h4>Items:</h4>
              <ul className="order-items-list">
                {order.items.map((item) => (
                  <li key={item.id} className="order-item-detail">
                    <img src={item.image} alt={item.name} className="order-item-image" />
                    <div>
                      <p>{item.name} x {item.quantity}</p>
                      <p>Brand: {item.brand}</p>
                      <p>Price: ${(Number(item.price) * Number(item.quantity)).toFixed(2)}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <div className="orders-container">
          <div className="main-text-oders">There are no orders</div>
          <div className="other-text-oders">To place an order, go</div>
          <div className="other-text-oders">to the catalog and add</div>
          <div className="other-text-oders">items to the cart</div>
        </div>
      )}

      <div className="zaglushka-orders"></div>
    </>
  );
};

export default Orders;