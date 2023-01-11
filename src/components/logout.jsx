import React from "react";

// Firebase
import firebase from "../lib/init-firebase";
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth(firebase);

// Helpers
import { logoutByCookie } from "../lib/cookie-helper";

//Style
import "../assets/index.css"
import Spinner from "../assets/Pulse-1s-157px (1).gif"

const logout = () => {
  signOut(auth)
    .then(() => {
      logoutByCookie();
      window.location.href = "/";
    })
    .catch((error) => {
      // An error happened.
      console.log(error);
    });

  return <div class="mainContainer">
    <img src={Spinner} alt="spin" />
</div>;
};

export default logout;
