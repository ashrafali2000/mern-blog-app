// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-app-cc864.firebaseapp.com",
  projectId: "mern-blog-app-cc864",
  storageBucket: "mern-blog-app-cc864.appspot.com",
  messagingSenderId: "134376819625",
  appId: "1:134376819625:web:36f06deb170332508252b8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
