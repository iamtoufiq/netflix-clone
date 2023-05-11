import React from "react";
import Login from "./Login";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "./actions/Index";
import HomeScreen from "./HomeScreen";
import { auth } from "./firebase";
const App = () => {
  const dispatch = useDispatch();
  const myState = useSelector((state) => state.loginAndLogout);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          login({
            uid: user.uid,
            email: user.email,
          })
        );
      } else {
        dispatch(logout());
      }
      return unsubscribe;
    });
  }, []);
  return <div>{!myState.name ? <Login /> : <HomeScreen />}</div>;
};

export default App;
