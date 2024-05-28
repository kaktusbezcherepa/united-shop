import Cart from '../../../assets/icons/basket.png'
import Fav from '../../../assets/icons/fav.svg'
import Profile from '../../../assets/icons/profile.svg'
import Search from '../../../assets/icons/search.svg'
import { Link } from 'react-router-dom'
import './Header.css'



function Header() {
  return (
    <>
        <div className="container-header">
        <div className="burger-button">
          <button className="header-button"><img src={Search} alt="Search" /></button>
        </div>
        <div className="logo-header">
          <h1><Link to="/">united</Link></h1>
        </div>
        <div className="categories-header">
          <a><Link to={"/catalog/men"}>men</Link></a>
          <a><Link to={"/catalog/women"}>women</Link></a>
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

