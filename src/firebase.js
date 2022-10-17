// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBfystXebfS0X4Ei5Rza3CMyCJbHDNnebA",
    authDomain: "todo-app-cc116.firebaseapp.com",
    projectId: "todo-app-cc116",
    storageBucket: "todo-app-cc116.appspot.com",
    messagingSenderId: "658486591834",
    appId: "1:658486591834:web:dcb6d0d8af8d8eb8913363"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
