import React, { useEffect, useState } from "react";
import "./Css/nav.css";
import { getAuth, signOut } from "firebase/auth";

const Nav = () => {
  const auth = getAuth();
  const [show, setShow] = useState(false);
  const trasitionNavbar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        alert("You have successfully logout");
      })
      .catch((error) => {
        alert(error);
      });
  };
  useEffect(() => {
    window.addEventListener("scroll", trasitionNavbar);
    return () => {
      window.removeEventListener("scroll", trasitionNavbar);
    };
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__content">
        <img
          className="logo"
          src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png"
          alt=""
        />
        <button className="logout__botton" onClick={handleLogOut}>
          LogOut
        </button>
      </div>
    </div>
  );
};

export default Nav;
