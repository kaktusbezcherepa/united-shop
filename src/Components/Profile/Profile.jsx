import "./Profile.css"
import sadEmoji from "../../../assets/icons/sad-emoji.svg"
import Exit from "../../../assets/icons/exit.svg"
import { useState } from "react"
import { Link } from "react-router-dom"


export const Profile = () => {
  const [isOpenProfile, setIsOpenProfile] = useState(false);

  const toggleModal = () => {
    setIsOpenProfile(!isOpenProfile);
  };

  return (
    <div className="profile-container">
      <div className="test"></div>
      <div className="profile-unreg-main-text">
        <h1 className="not-availiable">This page is only available to authorized users</h1>
      </div>
      <div className="profile-unreg-icon">
        <img src={sadEmoji} alt="Sad Emoji" />
      </div>
      <div className="unreg-button-container">
        <button onClick={toggleModal} className="unreg-button">
          Log / Reg
        </button>
        {isOpenProfile && (
          <div className="modal-container">
            <div className="modal-content">
              <button onClick={toggleModal} className="exit-icon-profile-button">
                <img className="exit-icon-profile" src={Exit} alt="Exit" />
              </button>
              <div className="container">
                <div className="form-container">
                  <h1>SIGN IN</h1>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" required />
                  </div>
                  <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" required />
                  </div>
                  <Link to="/test" >
                  <button>
                    SIGN IN
                  </button>
                  </Link>
                  <button className="register-button" onClick={() => {}}>
                    REGISTER
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};