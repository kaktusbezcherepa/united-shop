import "./Profile.css"
import sadEmoji from "../../../assets/icons/sad-emoji.svg"
import Footer from "../Footer/Footer"
import Exit from "../../../assets/icons/exit.svg"
import { useState } from "react"


export const Profile = () => {
  const [isOpenProfile, setIsOpenProfile] = useState(false);

  const toggleModale = () => {
    setIsOpenProfile(!isOpenProfile);
  }
  return (
    
    <>
    <div className="test"></div>
      <div className="profile-unreg-main-text">
          <h1 className="not-availiable">This page is only available to authorized users</h1>
     </div>
     <div className="profile-unreg-icon">
          <img src={sadEmoji}/>
      </div>
      <div className="unreg-button-container">
        <button onClick={toggleModale} className="unreg-button">Log / Reg</button>
        {isOpenProfile && (
          <div className="exit-icon-profile-container">
          <button onClick={toggleModale}><img className="exit-icon-profile"src={Exit}/></button>
          <div>
          <div className="container">
      <div className="form-container">
        <h1>SIGN IN</h1>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            required
          />
        </div>
        <button onClick={(e) => {
          e.preventDefault();
          console.log('Email:', document.getElementById('email').value);
          console.log('Password:', document.getElementById('password').value);
        }}>SIGN IN</button>
        <button className="register-button" onClick={() => {
        }}>REGISTER</button>
      </div>
    </div>
          </div>
        </div>
      )}
      </div>
      <Footer />
    </>
) }
