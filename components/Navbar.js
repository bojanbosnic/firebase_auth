import Link from "next/link";
import React from "react";
import { useAuth } from "../context/AuthContext";


const Navbar = () => {
  const { currentUser, logout } = useAuth();
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
        <ul style={{ display: "flex", listStyle: "none" }}>
          {currentUser ? (
            <div>
              <button onClick={handleLogOut}>Log Out</button>
            </div>
          ) : (
            <div>
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
            </div>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
