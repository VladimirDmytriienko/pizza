import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const API_KEY = import.meta.env.VITE_API_KEY

const firebaseConfig = {
  apiKey:  API_KEY,
  authDomain: "pizzza-pet-project.firebaseapp.com",
  projectId: "pizzza-pet-project",
  storageBucket: "pizzza-pet-project.appspot.com",
  messagingSenderId: "206775684482",
  appId: "1:206775684482:web:1d4edb78c3f342aa88139b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();