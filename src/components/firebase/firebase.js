import "firebase/firestore";
import "firebase/auth";
import app from "firebase/app";
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyD1GcPH0WDvgYhhVAvWt8OBcFGWqFV9dZQ",
    authDomain: "memingosreact.firebaseapp.com",
    databaseURL: "https://memingosreact.firebaseio.com",
    projectId: "memingosreact",
    storageBucket: "memingosreact.appspot.com",
    messagingSenderId: "690387114885",
    appId: "1:690387114885:web:b8e70d45812e3a1fa9c2ec",
    measurementId: "G-KRVTN4FMN6"
  };
  // Initialize Firebase
app.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = app.auth();
const storage = app.storage();

export { db, auth, app, storage };