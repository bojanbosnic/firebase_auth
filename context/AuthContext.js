import { useEffect, useState, createContext, useContext } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "../firebase";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

const signup = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

const signin = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

const logout = () => {
  return signOut(auth);
};
export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);
  //   return currentUser;
  return (
    <AuthContext.Provider value={{ currentUser, logout, signin, signup }}>
      {children}
    </AuthContext.Provider>
  );
};
