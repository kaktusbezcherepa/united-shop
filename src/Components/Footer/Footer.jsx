import './Footer.css'

function Footer() {
  return (
    <footer>
    <div className="container-footer">
      <div className="column1">
      <h2>UNITED</h2>
    </div>
    <div className="column2">
      <h3>SUPPORT</h3>
      <p>Help & Contact us</p>
      <p>Return & Refunds</p>
      <p>Privacy Police</p>
      <p>FAQ</p>
    </div>
    <div className="column3">
      <h3>COMPANY</h3>
      <p>What we do</p>
      <p>Gift Offers</p>
    </div>
    <div className="column4">
      <h3>CONTACTS</h3>
      <p>+7 (950) 777-77-77</p>
      <p>unitedclothes@mail.ru</p>
    </div>
  </div>
  <div className="border"></div>
</footer>
  );
}

export default Footer;