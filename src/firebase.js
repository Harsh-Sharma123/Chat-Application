// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getStorage } from "firebase/storage";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnDeNzfMv0HeESvS0X6OGntOh6nxy9i9Q",
  authDomain: "sample-d0305.firebaseapp.com",
  projectId: "sample-d0305",
  storageBucket: "sample-d0305.appspot.com",
  messagingSenderId: "1027259648737",
  appId: "1:1027259648737:web:4775288ea4a681d56605a0",
  measurementId: "G-D8W0966WFQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();