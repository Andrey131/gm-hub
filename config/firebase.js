// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7QavbfPhq0xyn6d5PSwLYN94y3CcsWNs",
  authDomain: "gm-hub-b2b70.firebaseapp.com",
  projectId: "gm-hub-b2b70",
  storageBucket: "gm-hub-b2b70.appspot.com",
  messagingSenderId: "223568617723",
  appId: "1:223568617723:web:f222934ea5f276b643505e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };

export default app;
