import React, { useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthContext";
import styles from "../styles/Home.module.css";

const login = () => {
  const [userEmail, setUserEmail] = useState();
  const [userPassword, setUserPassword] = useState();
const router= useRouter();
  const { signin } = useAuth();

  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      await signin(userEmail, userPassword);
      router.push("/dashboard");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.inputMain}>
          <input
            className={styles.formInput}
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
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
