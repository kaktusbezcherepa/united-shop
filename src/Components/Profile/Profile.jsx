import "./Profile.css"

export const Profile = () => {
  return (
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
          // Регистрация
        }}>REGISTER</button>
      </div>
    </div>
  );
}
