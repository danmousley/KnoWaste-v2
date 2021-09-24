// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFMwlxcW2iFUgiq4DdC5ik-_EXxludra0",
  authDomain: "knowaste-20efd.firebaseapp.com",
  projectId: "knowaste-20efd",
  storageBucket: "knowaste-20efd.appspot.com",
  messagingSenderId: "640091711525",
  appId: "1:640091711525:web:c432d5fb7acdc460ba77cc",
  measurementId: "G-NWFXSQRV7W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// 1. Get access to firestore functionality
const firestore = getFirestore(app)

// 2. Export that functionality so other components can use it
export { firestore, app }