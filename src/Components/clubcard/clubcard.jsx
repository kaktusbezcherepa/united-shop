import "./clubcard.css"
import { Link } from "react-router-dom"

export const Clubcard = () => {
    return (
      <>
        <div className="test"></div>
            <h1 className='profile-my-data'>profile</h1>
            <h2 className='my-data-text'>club card</h2>
                <div className="buttons-profile-container">
                <div className="buttons-profile3"><p className='profile-swap-win-button'><Link to={"/test"}>my data</Link></p></div>
                <div className="buttons-profile3"><p className='profile-swap-win-button'><Link to={"/orders"}>orders</Link></p></div>
                <div className="buttons-profile3"><p className='custom-varrior-button'>club card</p></div>
        </div>
        <div className="clubcard-container">
          <div className="clubcard"></div>
        </div>
      </>
    )
}

export default Clubcard