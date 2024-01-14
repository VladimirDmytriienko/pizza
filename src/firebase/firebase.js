import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const API_KEY = import.meta.env.VITE_API_KEY
const  APPID = import.meta.env.VITE_APPID
const  MSG = import.meta.env.VITE_MSG
const firebaseConfig = {
  apiKey:  API_KEY,
  authDomain: "pizzza-pet-project.firebaseapp.com",
  projectId: "pizzza-pet-project",
  storageBucket: "pizzza-pet-project.appspot.com",
  messagingSenderId: MSG,
  appId: APPID
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();