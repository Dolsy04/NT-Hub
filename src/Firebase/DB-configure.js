import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAMhQqr2YoWHA4oAK0O8Txxo8byM442ELE",
  authDomain: "nail-tech-hub.firebaseapp.com",
  projectId: "nail-tech-hub",
  storageBucket: "nail-tech-hub.firebasestorage.app",
  messagingSenderId: "655291016750",
  appId: "1:655291016750:web:de6d74b52d2b5d654f21bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

