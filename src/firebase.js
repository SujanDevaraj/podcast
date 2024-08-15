// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6spGt0XVWzwXc7cfVZRK3hioGl-5SS4Y",
  authDomain: "podcast-6ec24.firebaseapp.com",
  projectId: "podcast-6ec24",
  storageBucket: "podcast-6ec24.appspot.com",
  messagingSenderId: "946202950806",
  appId: "1:946202950806:web:24e73a54e79fd7ff8496b7",
  measurementId: "G-HS48RWMM9C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { auth, db, storage };

