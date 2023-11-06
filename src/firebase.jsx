// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAYo-zUfPLpRIk5dMxn-yMSRDe1Fu9ZWaM",
  authDomain: "blog-app-67a58.firebaseapp.com",
  projectId: "blog-app-67a58",
  storageBucket: "blog-app-67a58.appspot.com",
  messagingSenderId: "463585137554",
  appId: "1:463585137554:web:83cf7e405a49c87af6e74b",
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
