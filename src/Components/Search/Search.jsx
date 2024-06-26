import "./Search.css"
import Man from "../../../assets/models/model-man.png"
import Women from "../../../assets/models/model-women.png"
import Man2 from '../../../assets/models/model-man-2.png'
import Man3 from "../../../assets/models/model-man-3.png"
import { Link } from "react-router-dom"
import axios from "axios";

export const Search = () => {
  const handleSendEmail = async () => {
    try {
      const email = document.querySelector('.input-under-footer-text').value;
      const response = await axios.post('http://localhost:3001/send-email', { to: email });
      if (response.status === 200) {
        alert("Email sent successfully!");
      } else {
        console.error("Error sending email:", response);
        alert("Error sending email. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Error sending email. Please try again later.");
    }
  };

  return (
    <>
    <div className="test"></div>
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
      <Link to="/catalog" ><button className="button-models catalog">
             Catalog
            </button>
             </Link>
      </div>

      <div className="models">
        <div className="image-container">
        <img src={Man} alt="Man" />
        <div className="text-collection">
          <div className="limited">limited</div> 
          <div className="collection"><span className="first-white-letter">C</span>ollection</div>
          <Link to="/catalog/men" ><button className="button-models catalog">
       View collection
      </button>
       </Link> 
        </div>
        
      </div>
        <div className="image-container">
          <img src={Women} alt="Women" />
          <div className="text-collection">
          </div>
        </div>
      </div>
      <div className="summer-coll-container">
        <div className="summer-coll-text">summer</div>
          <div className="summer-coll-info">
          <div className="summer-coll-title">2024</div>
          <Link to="/summercollection" ><button className="summer-coll-button">View collection</button></Link>
  </div>
</div>

      <div className="blog-text">READ OUR BLOG POSTS</div>

      <div className="under-container-main">
        <div className="image-container-under">
        <img src={Man2} alt="Man" />
        <button className="button-on-image button-models">
         Read
        </button>
      </div>
      <div className="image-container-under">
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
          <button onClick={handleSendEmail} className="arrow-button"></button>
        </div>
      </div>
    </div> 
    </>
  )
}