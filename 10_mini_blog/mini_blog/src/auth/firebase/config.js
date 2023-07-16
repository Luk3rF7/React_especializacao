// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyDGiNTI5mi3e1aoxAkF247Q2RFnQ4Kfq1g",
  authDomain: "mini-blog-codar.firebaseapp.com",
  projectId: "mini-blog-codar",
  storageBucket: "mini-blog-codar.appspot.com",
  messagingSenderId: "482415623075",
  appId: "1:482415623075:web:0ac007c472589f65d6f816"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db =  getFirestore(app)
export {db}