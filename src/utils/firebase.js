// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "netflix-gpt-df75e.firebaseapp.com",
  projectId: "netflix-gpt-df75e",
  storageBucket: "netflix-gpt-df75e.appspot.com",
  messagingSenderId:process.env.REACT_APP_FIREBASE_MESSAGE_ID,
  appId: process.env.REACT_APP_FIREBASE_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASURMENT_ID
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
/*eslint-disable-next-line*/
const analytics = getAnalytics(app);

export const auth = getAuth();