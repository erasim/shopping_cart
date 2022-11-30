// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBS1q6HHttBWvAT1zqClKPc7a9Uk_qo6Vo",
  authDomain: "shopping-cart-cee54.firebaseapp.com",
  projectId: "shopping-cart-cee54",
  storageBucket: "shopping-cart-cee54.appspot.com",
  messagingSenderId: "278003007618",
  appId: "1:278003007618:web:37adb4caf5971998bdf49b",
  measurementId: "G-3VJ3FQE6MT"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()