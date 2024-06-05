import Footer from '../Footer/Footer';
import './test.css';

export const Test = () => {
  return (
    <>
    <div className="test"></div>
      <h1 className='profile-my-data'>profile</h1>
      <h2 className='my-data-text'>my data</h2>
      <div className="buttons-profile-container">
        <div className="buttons-profile1"><p className='profile-swap-win-button'>my data</p></div>
        <div className="buttons-profile2"><p className='profile-swap-win-button'>orders</p></div>
        <div className="buttons-profile3"><p className='profile-swap-win-button'>club card</p></div>
      </div>

      <div className="testik">
      <div className="input-fields-container">
        <div className="input-fields">
          <h3 className='field-name'>Name</h3>
          <input className='input-field' type="text" />
        </div>
        <div className="input-fields">
          <h3 className='field-name'>Surname</h3>
          <input className='input-field' type="text" />
        </div>
        <div className="input-fields">
          <h3 className='field-name'>Date of birth</h3>
          <input className='input-field' type="text" />
        </div>
        <div className="input-fields">
          <h3 className='field-name'>Email</h3>
          <input className='input-field' type="text" />
        </div>
        <div className="input-fields">
          <h3 className='field-name'>Password</h3>
          <input className='input-field' type="text" />
        </div> 
        <div className="input-fields">
          <h3 className='field-name'>Sex</h3>
            <div className='sex-varios'>Male</div>
              <input type="radio" id="Male" name="sex" value="Male" className="custom-radio"></input>
            <div className='sex-varios'>Female</div>
              <input type="radio" id="Female" name="sex" value="Female" className="custom-radio"></input>
        </div>
        <button className='button-save-key'>save</button>
      </div>
      
      </div>




      <div className="zagla"></div>
      <Footer />
    </>
  );
};

export default Test;