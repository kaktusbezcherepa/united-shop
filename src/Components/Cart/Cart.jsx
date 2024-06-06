import { useContext } from "react";
import { CartContext } from "../../CartContext"
import "./Cart.css"



export const Cart = () => {
  const { cart, removeCart } = useContext(CartContext)

  return (
    <>
    <div className="test"></div>

    


    {/* <h1>cart</h1>
    <div className="cart-list">
      {cart.map(product => (
        <div key={product.id} className="cart-item">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <p>Brand: {product.brand}</p>
            <button onClick={() => removeCart(product.id)}>remove from cart</button> 
        </div>
      ))}
    </div> */}
    </>
  )
}
