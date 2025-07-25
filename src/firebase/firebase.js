// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA92-aO28c1Tk8XA3cOW7f-fq5Eae_JUTI",
  authDomain: "jira-lite-71ca5.firebaseapp.com",
  projectId: "jira-lite-71ca5",
  storageBucket: "jira-lite-71ca5.appspot.com",
  messagingSenderId: "183932712865",
  appId: "1:183932712865:web:676ab40c26787b3c1ffde0",
  measurementId: "G-R7ECGQEFDD",
  databaseURL: "https://jira-lite-71ca5-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase services
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
