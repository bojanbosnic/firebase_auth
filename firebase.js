import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBxFfLzhuyy-3gBQwQ78hws1BTUAy6eZ_I",
  authDomain: "first-f7dcd.firebaseapp.com",
  projectId: "first-f7dcd",
  storageBucket: "first-f7dcd.appspot.com",
  messagingSenderId: "1096537000218",
  appId: "1:1096537000218:web:90e501264aadc51a8684a3",
};

const app = initializeApp(firebaseConfig);


export const auth = getAuth();

