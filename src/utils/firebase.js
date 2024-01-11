// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3dZsSOkJIUBPJebOy-1A7xZXpWYw_59o",
  authDomain: "netflix-gpt-df75e.firebaseapp.com",
  projectId: "netflix-gpt-df75e",
  storageBucket: "netflix-gpt-df75e.appspot.com",
  messagingSenderId: "4414286542",
  appId: "1:4414286542:web:3c0aee9790922ac51dbe9f",
  measurementId: "G-RCDQWLGZHY"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
/*eslint-disable-next-line*/
const analytics = getAnalytics(app);

export const auth = getAuth();