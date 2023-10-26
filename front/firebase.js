// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGx6P_zqUX9E0gL_TMblqWMqCZHWUHG-c",
  authDomain: "auth-aos.firebaseapp.com",
  projectId: "auth-aos",
  storageBucket: "auth-aos.appspot.com",
  messagingSenderId: "641620517331",
  appId: "1:641620517331:web:eedc3523320874c23b8f26"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth(app);

export { auth };
export { firebase }