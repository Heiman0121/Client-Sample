import React, { useState } from "react";
import styles from "./LoginPage.module.css";

const LoginPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className={styles.main}>
      <div className={styles.container}>
      
      <h2 className={styles.title}>Login</h2>
    
      <form
        className={styles.login_form}
        onSubmit={handleSubmit}>
        <label htmlFor="email">User Name</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Username"
          id="email"
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          id="password"
          name="password"
        />
        <button className={styles.button}type="submit">Log In</button>
      </form>
      <a href="/register">
      <button
        className={styles.link_btn}
        onClick={() => props.onFormSwitch("register")}>
        Don't have an account? Register here.
      </button>
          </a>
      </div>
    </div>
   
  );
};

export default LoginPage;
