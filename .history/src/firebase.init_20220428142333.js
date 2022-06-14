// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQJRx9EvCMdHQjO1_IPVCvWyFEE0xk64Y",
  authDomain: "genius-car-service-3b806.firebaseapp.com",
  projectId: "genius-car-service-3b806",
  storageBucket: "genius-car-service-3b806.appspot.com",
  messagingSenderId: "255082262808",
  appId: "1:255082262808:web:5702644317cc82c567ee6d",
  measurementId: "G-52EQTYVNC4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
