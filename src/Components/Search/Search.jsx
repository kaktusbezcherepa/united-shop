import "./Search.css"
import Man from "../../../assets/models/model-man.png"
import Women from "../../../assets/models/model-women.png"
import Man2 from '../../../assets/models/model-man-2.png'
import Niggers from "../../../assets/models/model-man-niggers.png"


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
            <button>
             Button
            </button>
      </div>

      <div className="limited-edition">
        <p className="limited-text">LIMITED EDITION</p>
      </div>

      <div className="models">
        <div className="image-container">
        <img src={Man} alt="Man" />
        <button className="button-on-image">
         buy
        </button>
      </div>
  <div className="image-container">
    <img src={Women} alt="Women" />
        <button className="button-on-image">
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
        <button className="button-on-image">
         Read
        </button>
      </div>
    <div className="image-container">
    <img src={Niggers} alt="men-photo2" />
        <button className="button-on-image">
         Read
        </button>
        </div>
    </div>      

      <div className="zaglushka"></div>
    </>
  )
}
