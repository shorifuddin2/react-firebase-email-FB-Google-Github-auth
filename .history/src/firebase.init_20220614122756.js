// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7uu9rWeyhqd8UO0T3uR1S5EdF89M52Uc",
  authDomain: "portfolio-74808.firebaseapp.com",
  projectId: "portfolio-74808",
  storageBucket: "portfolio-74808.appspot.com",
  messagingSenderId: "869557834801",
  appId: "1:869557834801:web:dc8331c07adeaf1eeff110",
  measurementId: "G-91NLS8CSR7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
