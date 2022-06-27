import { useState, useRef } from "react";
import { signup, useAuth, logout, signin } from "../firebase";
import styles from "../styles/Home.module.css";
import HomePage from "./HomePage";

export default function Home() {
  const currentUser = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  console.log(currentUser);
  const handleSignUp = async (event) => {
    try {
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch (error) {
      alert(error);
    }
  };
  const handleSignIn = async (event) => {
    try {
      await signin(emailRef.current.value, passwordRef.current.value);
    } catch (error) {
      alert(error);
    }
  };

 const handleLogOut = async () => {
    try {
      await logout();
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className={styles.container}>
      <div>
        {currentUser? "hello world from page" : "nije"}
        <input
          ref={emailRef}
          style={{ marginRight: "1rem", padding: "0.5rem 1rem" }}
          type="email"
          placeholder="Email"
        />
        <input
          ref={passwordRef}
          style={{ marginRight: "1rem", padding: "0.5rem 1rem" }}
          type="password"
          placeholder="Password"
        />
      </div>
      <button onClick={handleSignUp}>Sign Up</button>
      <button onClick={handleSignIn}>Log In</button>
      <button onClick={handleLogOut}>Log Out</button>
    </div>
  );
}
