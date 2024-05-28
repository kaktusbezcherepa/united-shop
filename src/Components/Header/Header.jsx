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
            <p>test</p>
            <p>test</p>
          </div>
        </div>
      )}
        </div>
        <div className="logo-header">
          <h1><Link to="/">united</Link></h1>
        </div>
        <div className="categories-header">
          <a><Link to={"/catalog/men"}>men</Link></a>
          <a><Link to={"/catalog/woman"}>women</Link></a>
        </div>

        <div className="icon-group">
          <a><Link to="/cart"><img className="icons" src={Cart} alt="Cart" /></Link></a>
          <a><Link to="/favorites"><img className="icons" src={Fav} alt="Favorites" /></Link></a>
          <a><Link to="/profile"><img className="icons" src={Profile} alt="Profile" /></Link></a>
        </div>
      </div>
    </>
  )
}


export default Header

