// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const all = import.meta.env;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7FH8ekWRPMNRImE2E2i3JdLYjZnswlVA",
  authDomain: "react-glass-705f8.firebaseapp.com",
  projectId: "react-glass-705f8",
  storageBucket: "react-glass-705f8.appspot.com",
  messagingSenderId: "514827646438",
  appId: "1:514827646438:web:4a570e7a102569b86ad227",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
