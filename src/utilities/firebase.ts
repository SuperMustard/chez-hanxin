// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API,
  authDomain: "chez-hanxin.firebaseapp.com",
  projectId: "chez-hanxin",
  storageBucket: "chez-hanxin.appspot.com",
  messagingSenderId: "83810731509",
  appId: "1:83810731509:web:c594d1af232393368f8cbc",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
