import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZXIf-xloKJkCoD4JQOr6a9mIwSmwyujE",
  authDomain: "mibanco-chicasenlanube.firebaseapp.com",
  projectId: "mibanco-chicasenlanube",
  storageBucket: "mibanco-chicasenlanube.firebasestorage.app",
  messagingSenderId: "144106723703",
  appId: "1:144106723703:web:4e93b82948707019a0a972"
};

const app = initializeApp(firebaseConfig);

// 🔥 servicios clave
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);