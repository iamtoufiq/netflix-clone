import React, { useRef } from "react";
import { auth } from "./firebase";
const SignUpScreen = () => {
  const emailRef = useRef();
  const passlRef = useRef();

  const signIn = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passlRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => alert(error.message));
  };
  const register = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passlRef.current.value
      )
      .then((authUser) => console.log(authUser))
      .catch((error) => alert(error.message));
  };

  return (
    <div className="singUpScreen">
      <form>
        <h1>Sign In</h1>
        <input type="email" placeholder="Email" required ref={emailRef} />
        <input type="password" placeholder="Password" required ref={passlRef} />
        <button onClick={signIn}>Sign In</button>
        <h4>
          New to Netflix<span onClick={register}> Sign Up Now.</span>
        </h4>
      </form>
    </div>
  );
};

export default SignUpScreen;
