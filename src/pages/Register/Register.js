import "./register.css";

export default function Register() {
  return (
    <div className="Register">
      <div className="RegisterWrapper">
        <div className="RegisterLeft">
          <h3 className="RegisterLogo">facebook</h3>
          <span className="RegisterDesc">
            Connect with friends and the world around you on Facebook.
          </span>
        </div>
        <div className="RegisterRight">
          <div className="RegisterBox">
            <div className="head">
              <h1>Sign Up</h1>
              <p>Its quick and easy</p>
            </div>
            <div className="name">
            <input placeholder="First Name" className="nameInput" />
            <input placeholder="Last Name" className="nameInput" />
            </div>
            <input placeholder="Mobile Number" className="RegisterInput" />

            <input placeholder="Email" className="RegisterInput" />
            <input placeholder="New Password" className="RegisterInput" />
            <input placeholder="Confirm Password" className="RegisterInput" />
            <button className="signupButton">Sign Up</button>
            <button className="RegisterButton">Log into Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}
