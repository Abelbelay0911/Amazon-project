// Your web app's Firebase configuration
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

// import firebase from "firebase/compat/app";

// import { getAuth } from "firebase/auth";
// import "firebase/compat/firestore";
// import "firebase/compat/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCIP-qDvCbMTdk2sVeXnMF0FPBpNgtuAE8",
  authDomain: "clone-7fd3d.firebaseapp.com",
  projectId: "clone-7fd3d",
  storageBucket: "clone-7fd3d.firebasestorage.app",
  messagingSenderId: "493866401443",
  appId: "1:493866401443:web:41fc76e4a7d35881534916",
};

const app = firebase.initializeApp(firebaseConfig);

// Firebase auth and Firestore
export const auth = app.auth();  // Use auth() to get the authentication instance
export const db = app.firestore();  // Use firestore() to get Firestore instance

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const auth = getAuth(app);
// const db = getFirestore(app);
// const storage = getStorage(app);

// const app = firebase.initializeApp(firebaseConfig); 
// export const auth = getAuth(app);
// export const db = firebase.firestore(); 