// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6IxV_CNiAVbjAgm8d0xtgA8DiDAkubwM",
  authDomain: "ssh-mobile.firebaseapp.com",
  projectId: "ssh-mobile",
  storageBucket: "ssh-mobile.appspot.com",
  messagingSenderId: "191602818047",
  appId: "1:191602818047:web:3125a57e00d789b7f345ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;