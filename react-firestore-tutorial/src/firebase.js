// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; 
import {getFirestore} from "firebase/firestore"
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8YUqVK1dOb4ly82v06IE4J2473UUasXQ",
  authDomain: "presentation-firestore.firebaseapp.com",
  projectId: "presentation-firestore",
  storageBucket: "presentation-firestore.appspot.com",
  messagingSenderId: "818131073090",
  appId: "1:818131073090:web:54543d31eacd6aecee15db",
  measurementId: "G-37K85H9CWD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)