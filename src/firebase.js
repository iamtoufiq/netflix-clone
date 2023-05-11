import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// ------------
const firebaseConfig = {
  apiKey: "AIzaSyCmUYHRZIMP95sn_UsKEhKL8HODhdc_KEI",
  authDomain: "netflix-clone-338d4.firebaseapp.com",
  projectId: "netflix-clone-338d4",
  storageBucket: "netflix-clone-338d4.appspot.com",
  messagingSenderId: "1057190641584",
  appId: "1:1057190641584:web:94bdea3799490ee6722075",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
