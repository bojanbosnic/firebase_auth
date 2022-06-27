import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";
const firebaseConfig = {
  apiKey: "AIzaSyBxFfLzhuyy-3gBQwQ78hws1BTUAy6eZ_I",
  authDomain: "first-f7dcd.firebaseapp.com",
  projectId: "first-f7dcd",
  storageBucket: "first-f7dcd.appspot.com",
  messagingSenderId: "1096537000218",
  appId: "1:1096537000218:web:90e501264aadc51a8684a3",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export const signup = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const signin = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logout=()=>{
  return signOut(auth);
}

export const useAuth = () => {
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);
  return currentUser;
};
