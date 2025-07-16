import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "gameit-caf44.firebaseapp.com",
  projectId: "gameit-caf44",
  storageBucket: "gameit-caf44.appspot.com", 
  messagingSenderId: "74017852493",
  appId: "1:74017852493:web:bf5538d36a321718e52004",
  measurementId: "G-WDV6KYV4GL"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
