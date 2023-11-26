import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDitehZojuHNsXtBQLl-0qihNpoLsIzVZA",
  authDomain: "coder-bmw.firebaseapp.com",
  projectId: "coder-bmw",
  storageBucket: "coder-bmw.appspot.com",
  messagingSenderId: "1052753081538",
  appId: "1:1052753081538:web:a1b7547a208baf858e775b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(

    <App />

)
