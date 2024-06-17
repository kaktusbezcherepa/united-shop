import Cart from '../../../assets/icons/basket.png'
import Fav from '../../../assets/icons/fav.svg'
import Profile from '../../../assets/icons/profile.svg'
import Search from '../../../assets/icons/search.svg'
import { Link } from 'react-router-dom'
import Exit from "../../../assets/icons/exit.svg"
import './Header.css'
import { useState } from 'react'



function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
        <div className="container-header">
        <div className="burger-button">
          <button onClick={toggleModal} className="header-button"><img src={Search} alt="Search" /></button>
          {isOpen && (
        <div className="modal">
          <div className="modal-content">
          <button className="exit-button"onClick={toggleModal}><img className="exit-button-size"src={Exit} alt="" /></button>
          <div className="modal-info">
                <h3 className="modal-categories-list"><Link to="/catalog">Default Catalog</Link></h3>
                <h3 className="modal-categories-list"><Link to="/catalog/men">Limited edition</Link></h3>
                <h3 className="modal-categories-list"><Link to="/summercollection">Summer Collection</Link></h3>
          </div>
          </div>
        </div>
      )}
        </div>
        <div className="logo-header">
          <h1 className='header-name'><Link to="/">united</Link></h1>
        </div>
      
        <div className="icon-group">
          <Link to="/cart"><img className="icons" src={Cart} alt="Cart" /></Link>
          <Link to="/favorites"><img className="icons" src={Fav} alt="Favorites" /></Link>
          <Link to="/test"><img className="icons" src={Profile} alt="Profile" /></Link>
        </div>
      </div>
    </>
  )
}


export default Header

