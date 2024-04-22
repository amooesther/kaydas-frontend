// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHcoaznAJ254FyDwRcbsQO0gEtDKcpd8U",
  authDomain: "kaydas-aeb77.firebaseapp.com",
  projectId: "kaydas-aeb77",
  storageBucket: "kaydas-aeb77.appspot.com",
  messagingSenderId: "111510842903",
  appId: "1:111510842903:web:f77929c405f01b8173f652",
  measurementId: "G-C0HLP6CDWR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth(); 
export const db = getFirestore(app) 
export default app;