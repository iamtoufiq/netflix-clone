import React, { useState } from "react";
import "./Css/login.css";
import SignUpScreen from "./SignUpScreen";
const Login = () => {
  const [signIn, setSignIn] = useState(false);
  const showSignUp = (event) => {
    event.preventDefault();
    setSignIn(true);
  };
  return (
    <div className="login">
      <div className="login__header">
        <img
          className="login__logo"
          src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png"
          alt=""
        />
        <button className="login__button">Sign In</button>
      </div>
      <div className="login__body">
        {signIn ? (
          <SignUpScreen />
        ) : (
          <>
            <h1>Unlimited movies, TV shows and more</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <form className="login__form">
              <input type="text" placeholder="Email Address" />
              <button onClick={showSignUp}>Get Started</button>
            </form>
          </>
        )}
      </div>
      <div className="login_gradient"></div>
    </div>
  );
};

export default Login;
