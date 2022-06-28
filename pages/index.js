// import { useState, useRef } from "react";
// import { signup, useAuth, logout, signin } from "../firebase";
import styles from "../styles/Home.module.css";


export default function Home() {
//   const [userEmail, setUserEmail] = useState('')
//   const [userPassword, setUserPassword] = useState('')
//   const currentUser = useAuth();



//   const handleSignUp = async (event) => {
//     try {
//       await signup(userEmail, userPassword);
//     } catch (error) {
//       alert(error);
//     }
//   };
//   const handleSignIn = async (event) => {
//     try {
//       await signin(userEmail, userPassword);
//     } catch (error) {
//       alert(error);
//     }
//   };

//  const handleLogOut = async () => {
//     try {
//       await logout();
//     } catch (error) {
//       alert(error);
//     }
//   };

  return (
    <div className={styles.container}>
      <h1>Hello from home page</h1>
      {/* <div>
   
        <input
          value={userEmail}
          onChange={(e) =>
            currentUser ? setUserEmail(null) : setUserEmail(e.target.value)
          }
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
      <button onClick={handleSignIn}>Log In</button>
   <button onClick={handleLogOut}>Log Out</button>  */}
    </div>
  );
}
