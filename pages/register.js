import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthContext";
import styles from "../styles/Home.module.css";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase";

const Interface = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  const { signup, currentUser } = useAuth();
  const router = useRouter();

  const displayUser = async () => {
    if (currentUser) {
      await updateProfile(currentUser, { displayName: displayName });
    }
  };

  const handleSignUp = async (event) => {
    try {
      await signup(userEmail, userPassword);
      
      router.push("/example");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (currentUser) {
      displayUser();
      router.push("/example");
    }
  }, [currentUser]);
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.inputMain}>
          <label>Name</label>
          <input
            className={styles.formInput}
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            style={{ marginRight: "1rem", padding: "0.5rem 1rem" }}
            type="text"
            placeholder="DisplayName"
          />
          <label>Email</label>
          <input
            className={styles.formInput}
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            style={{ marginRight: "1rem", padding: "0.5rem 1rem" }}
            type="email"
            placeholder="Email"
          />
          <label>Password</label>
          <input
            className={styles.formInput}
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
            style={{ marginRight: "1rem", padding: "0.5rem 1rem" }}
            type="password"
            placeholder="Password"
          />
          <button onClick={handleSignUp}>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Interface;
