import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import firebase from 'firebase/app'; // import { initializeApp } from "firebase/app";
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKVLNxb9wTeOwz6hxfosQSCFXvgyuyqMA",
  authDomain: "cart-a27e1.firebaseapp.com",
  projectId: "cart-a27e1",
  storageBucket: "cart-a27e1.appspot.com",
  messagingSenderId: "5686478523",
  appId: "1:5686478523:web:0b465ef1c0456343604b9e"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
