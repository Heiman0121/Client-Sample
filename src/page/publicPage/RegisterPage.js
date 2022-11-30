import React, { useState } from "react";
import styles from "./RegisterPage.module.css";

const RegisterPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className={styles.main}>
      <div className={styles.container}>
      
      <h2 className={styles.title}>Register</h2>
    
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
        <label htmlFor="email">Email</label>
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
        <label htmlFor="password">Confirm Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          id="password"
          name="password"
        />
        <button className={styles.button}type="submit">Submit</button>
      </form>
      </div>
    </div>
   
  );
};

export default RegisterPage;
