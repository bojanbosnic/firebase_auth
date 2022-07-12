import { useEffect, useState, createContext, useContext } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";

import LoadingSpinner from "../components/LoadingSpinner";
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
  const [isLogedIn, setIsLogedIn] = useState(true);
  const [color, setColor] = useState({
    primary: 'white',
    secondary: 'black'
  })
  console.log(currentUser)
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      if(user?.accessToken){
      localStorage.setItem("Token", user.accessToken)
      }
    });
    setIsLogedIn(false);
    console.log(currentUser);
    return unsub;
  }, []);

  if (isLogedIn) {
    return <LoadingSpinner />;
  }
  //   return currentUser;

  const toggleLightMode = () => {
    if (color.primary === 'white') {

      setColor({
        primary: 'black',
        secondary: 'white'
      })
      return
    }
    
    setColor({
      primary: 'white',
      secondary: 'black'
    })

  }


  const value = {
    currentUser, logout, signin, signup, isLogedIn, color, setColor,toggleLightMode
  }

  return (
    <AuthContext.Provider
      value={value}
    >
      {children}
    </AuthContext.Provider>
  );
};
