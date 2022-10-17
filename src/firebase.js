// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLiSfsX9cvvc-XDZqtSX6atb-ZoBq6JrE",
  authDomain: "todo-app-92cf8.firebaseapp.com",
  projectId: "todo-app-92cf8",
  storageBucket: "todo-app-92cf8.appspot.com",
  messagingSenderId: "567843835789",
  appId: "1:567843835789:web:c8fdb55d67805d23b7b7c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
