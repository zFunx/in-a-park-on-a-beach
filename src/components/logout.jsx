import React from "react";

// Firebase
import firebase from "../lib/init-firebase";
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth(firebase);

// Helpers
import { logoutByCookie } from "../lib/cookie-helper";

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

  return <div>Logging out...</div>;
};

export default logout;
