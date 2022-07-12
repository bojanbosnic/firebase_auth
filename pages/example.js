import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
const example = () => {
  const {currentUser}= useAuth();
  const router = useRouter();
useEffect(()=>{
  if(!currentUser){
    router.push('/register')
  }
},[])
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "5rem 10rem",
      }}
    >
      <h1>Example</h1>
      <p style={{ fontWeight: "italic" }}>
        Cillum eiusmod quis aliqua occaecat ipsum consectetur. Aliquip eu
        cupidatat proident enim elit qui incididunt ad commodo minim. Dolore
        exercitation nisi ut tempor veniam et. Veniam anim minim velit qui
        aliqua do sint. Et deserunt tempor ullamco Lorem magna occaecat eu.
        Mollit commodo laborum dolore mollit cillum non elit labore culpa do.
      </p>
      <p>😎😎😎😎😎</p>
      {/* <p>{currentUser?.accessToken}</p> */}
      {currentUser?.accessToken&& <input placeholder="Porfil update"/>}
    </div>
  );
};

export default example;
