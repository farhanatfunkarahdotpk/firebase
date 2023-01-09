// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCw1meXxOcRPuwC88xvmNBM5Apy1dupt-U",
  authDomain: "funkaradotpk-dev.firebaseapp.com",
  databaseURL: "https://funkaradotpk-dev-default-rtdb.firebaseio.com",
  projectId: "funkaradotpk-dev",
  storageBucket: "funkaradotpk-dev.appspot.com",
  messagingSenderId: "546396771434",
  appId: "1:546396771434:web:e4530f5a1c22010ac1a613",
  measurementId: "G-1P54CQW76W"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);