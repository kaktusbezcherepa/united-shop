import Footer from '../Footer/Footer';
import './test.css';

export const Test = () => {
  return (
    <>
      <div className='global'>
        <div className='profile-info-text'>PROFILE</div>
        <div className='mydata'>MY DATA</div>
        <table className='sidebar'>
          <tr>
            <th className='tho'>MY DATA</th>
          </tr>
          <tr>
            <td className='tdo'>ORDERS</td>
          </tr>
          <tr>
            <td className='tdo'>CLUB CARD</td>
          </tr>
        </table>
        <label className='table-main' for="name"><b>Name</b></label><input className='input-main' type="text" name="name" required></input>
        <label className='table-main' for="name"><b>Name</b></label><input className='input-main' type="text" name="name" required></input>
        <label className='table-main' for="name"><b>Name</b></label><input className='input-main' type="text" name="name" required></input>
        </div>
      <Footer />
    </>
  );
};

export default Test;