import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "react-chat-app-1cab4.firebaseapp.com",
  projectId: "react-chat-app-1cab4",
  storageBucket: "react-chat-app-1cab4.appspot.com",
  messagingSenderId: "189142587414",
  appId: "1:189142587414:web:a311d1cfe8695ce3fa7d37",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
