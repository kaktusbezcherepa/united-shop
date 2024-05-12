import "./Search.css"
import Man from "../../../assets/models/model-man.png"
import Women from "../../../assets/models/model-women.png"
import Man2 from '../../../assets/models/model-man-2.png'
import Man3 from "../../../assets/models/model-man-3.png"
import Delivery from "../../../assets/icons/delivery.svg"
import Return from "../../../assets/icons/return.svg"
import Secure from "../../../assets/icons/secure.svg"
import Tracking from "../../../assets/icons/tracking.svg"


export const Search = () => {
  return (
    <>
    <div className="logo">
        <h1 className="name">united</h1>
    </div>

    <div className="title-container">
          <div className="title top">
              <p>II</p>
          </div>
          <p className="main-text">Dress to Impress, Every <br/> Occasion Addressed</p>
          <div className="title bottom">
              <p>II</p>
          </div>
      </div>
      <div className="btn-container">
            <button className="button-models catalog">
             Catalog
            </button>
      </div>

      <div className="limited-edition">
        <p className="limited-text">LIMITED EDITION</p>
      </div>

      <div className="models">
        <div className="image-container">
        <img src={Man} alt="Man" />
        <button className="button-on-image button-models">
         buy
        </button>
      </div>
  <div className="image-container">
    <img src={Women} alt="Women" />
        <button className="button-on-image button-models">
         Buy
        </button>
        </div>
    </div>

      <div className="summer-collection">
        <h1>summer</h1> 
        <p>collection</p>
      </div>

      <div className="blog-text">READ OUR BLOG POSTS</div>

      <div className="models under-blog">
        <div className="image-container">
        <img src={Man2} alt="Man" />
        <button className="button-on-image button-models">
         Read
        </button>
      </div>
    <div className="image-container">
    <img src={Man3} alt="men-photo2" />
        <button className="button-on-image button-models">
         Read
        </button>
        </div>
    </div>      

    <div className="prefooter">
  <div className="prefooter-text">
        <p>Sign up to our newsletter for all <br /> the latest news & discounts.</p>
        <div className="input-container">
          <input placeholder="E-mail adress" className="input-under-footer-text" type="text" />
          <button  className="arrow-button"></button>
        </div>
      </div>
    </div> 

    <div className="container-column">
        <div className="column"><img src={Delivery} className="footer-icons" />FAST DELIVERY </div>
        <div className="column"><img src={Return} className="return footer-icons"  />FREE RETURNS BLOCK</div>
        <div className="column"><img src={Secure} className="footer-icons" />SECURE CHECKOUT</div>
        <div className="column"><img src={Tracking} className="footer-icons" />ORDER TRACKING</div>
    </div>



      <div className="zaglushka"></div>
    </>
  )
}
