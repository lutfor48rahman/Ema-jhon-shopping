// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6o9_55RMRquWKCTE0K37R40veZkOQxTg",
  authDomain: "ema-jhon-simple-fb5aa.firebaseapp.com",
  projectId: "ema-jhon-simple-fb5aa",
  storageBucket: "ema-jhon-simple-fb5aa.appspot.com",
  messagingSenderId: "856630041789",
  appId: "1:856630041789:web:2227f26b329c315cccabd4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;