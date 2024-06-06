import "./orders.css"
import { Link } from "react-router-dom"

export const Orders = () => {
    return (
      <>
        <div className="test"></div>
            <h1 className='profile-my-data'>profile</h1>
            <h2 className='my-data-text'>orders</h2>
                <div className="buttons-profile-container">
                <div className="buttons-profile3"><p className='profile-swap-win-button'><Link to={"/test"} style={{ textDecoration: 'none' }}>my data</Link></p></div>
                <div className="buttons-profile2"><p className='custom-varrior-button'>orders</p></div>
                <div className="buttons-profile3"><p className='profile-swap-win-button'><Link to={"/clubcard"} style={{ textDecoration: 'none' }}>club cars</Link></p></div>
        </div>
        <div className="orders-container">
          <div className="main-text-oders">Threre are no orders</div>
          <div className="other-text-oders">To place an order, go</div>
          <div className="other-text-oders">to the catalog and add</div>
          <div className="other-text-oders">item to the cart</div>
        </div>
        <div className="zaglushka-orders"></div>
      </>
    )
}

export default Orders;