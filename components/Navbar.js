import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from "../styles/Home.module.css";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const router = useRouter();
  console.log(currentUser);

  const handleLogOut = async () => {
    try {
      await logout();
      router.push('/login')
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div>
      <nav>
        <ul className={styles.navbar}>
          {currentUser ? (
            <>
              <li>
                <Link href="/example">
                  <a>Example</a>
                </Link>
              </li>
              <li>
                <Link href="/profile">
                  <a>Profile</a>
                </Link>
              </li>
              <button
                onClick={() => {
                  handleLogOut(), router.replace("/login");
                }}
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <li style={{ marginRight: "1rem" }}>
                <Link href="/register">
                  <a>Sign Up</a>
                </Link>
              </li>
              <li style={{ marginRight: "1rem" }}>
                <Link href="/login">
                  <a>Login</a>
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    
    </div>
  );
};

export default Navbar;
