import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from '../styles/Home.module.css';
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const router = useRouter();


  const handleLogOut = async () => {
    try {
      await logout();
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div>
      <nav>
        <ul className={styles.navbar}>
          {currentUser ? (
            <button
              onClick={() => {
                handleLogOut(), router.push("/login");
              }}
            >
              Log Out
            </button>
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
