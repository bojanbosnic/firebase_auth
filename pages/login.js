import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthContext";
import styles from "../styles/Home.module.css";
import LoadingSpinner from "../components/LoadingSpinner";

const login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const router = useRouter();
  const { signin, currentUser } = useAuth();



  const handleSignIn = async (event) => {
    try {
    await signin(userEmail, userPassword);
      setUserEmail('')
      setUserPassword("")
    
      router.push("/example")
    } catch (error) {
      alert(error);
    }
  };

  // useEffect(() => {
  //   if (currentUser) {
  //     router.push("/example");
  //   }
  // }, [currentUser]);

  const token = localStorage.getItem('token')
  

  
  if(localStorage.getItem('Token')){ 
    router.push("/example");
  }
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.inputMain}>
          <p>{currentUser ? "KORISNIK JE PRIJAVLJEN" : "nista"}</p>
          <label>Email</label>
          <input
            className={styles.formInput}
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
          <label>Password</label>
          <input
            className={styles.formInput}
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <button onClick={handleSignIn}>Log In</button>
        </div>
      </div>
    </div>
  );
};

export default login;
