import './Footer.css'

function Footer() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>UNITED</h5>
            <ul>
              <li><a href="#">SUPPORT</a></li>
              <li><a href="#">Help & Contact Us</a></li>
              <li><a href="#">Return & Refunds</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>COMPANY</h5>
            <ul>
              <li><a href="#">What we do</a></li>
              <li><a href="#">Gift Offers</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>CONTACTS</h5>
            <ul>
              <li>+7 (950) 777-77-77</li>
              <li><a href="mailto:unitedclothes@mail.ru">unitedclothes@mail.ru</a></li>
            </ul>
            <p>&copy; 2024, ALL RIGHTS RESERVED UNITED</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;