import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import styles from "../styles/Home.module.css";

const Interface = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const { signup } = useAuth();

  const handleSignUp = async (event) => {
    try {
      await signup(userEmail, userPassword);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className={styles.container}>
        <div>
          <input
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            style={{ marginRight: "1rem", padding: "0.5rem 1rem" }}
            type="email"
            placeholder="Email"
          />
          <input
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
            style={{ marginRight: "1rem", padding: "0.5rem 1rem" }}
            type="password"
            placeholder="Password"
          />
        </div>
        <button onClick={handleSignUp}>Sign Up</button>
      </div>
    </div>
  );
};

export default Interface;
