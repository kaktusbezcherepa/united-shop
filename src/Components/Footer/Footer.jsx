import Delivery from "../../../assets/icons/delivery.svg"
import Return from "../../../assets/icons/return.svg"
import Secure from "../../../assets/icons/secure.svg"
import Tracking from "../../../assets/icons/tracking.svg"
import './Footer.css'
import { Link } from "react-router-dom"

function Footer() {
  return (
  <>
    <div className="container-column">
        <div className="column"><img src={Delivery} className="footer-icons" />FAST DELIVERY </div>
        <div className="column"><img src={Return} className="return footer-icons"  />FREE RETURNS BLOCK</div>
        <div className="column"><img src={Secure} className="footer-icons" />SECURE CHECKOUT</div>
        <div className="column"><img src={Tracking} className="footer-icons" />ORDER TRACKING</div>
    </div>
    <footer>
    <div className="container-footer">
      <div className="column1">
      <h2>UNITED</h2>
    </div>
    <div className="column2">
      <h3>SUPPORT</h3>
      <p><Link to={"/profile"}>Help & Contact us</Link></p>
      <p>Return & Refunds</p>
      <p>Privacy Police</p>
      <p>FAQ</p>
    </div>
    <div className="column3">
      <h3>COMPANY</h3>
      <p>What we do</p>
      <p>Gift Offers</p>
    </div>
    <div className="column4">
      <h3>CONTACTS</h3>
      <p>+7 (950) 777-77-77</p>
      <p>unitedclothes@mail.ru</p>
    </div>
  </div>
  <div className="border"></div>
</footer>
  </>
  );
}

export default Footer;