import firebase from 'firebase/compat/app';
//  import { initializeApp } from 'firebase/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {getAuth, GoogleAuthProvider } from "firebase/auth"


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_WzIhJA3BJVWsGiKRwhBaKDuMjr6E4ww",
  authDomain: "react-newsletter---pilates.firebaseapp.com",
  projectId: "react-newsletter---pilates",
  storageBucket: "react-newsletter---pilates.appspot.com",
  messagingSenderId: "202435719048",
  appId: "1:202435719048:web:a0eef08f9648197eb7543d",
  measurementId: "G-B80GLLC8CC"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const app = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();


  export default db;