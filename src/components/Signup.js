import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import "./Signup.css";

const Signup = ({ onSignupSuccess, toggleToLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      onSignupSuccess();
    } catch (error) {
      alert("Signup failed: " + error.message);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="signup-title">Sign up to GämeIt̤</h2>
        <input
          type="email"
          placeholder="Email"
          className="signup-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br />
        <input
          type="password"
          placeholder="Password"
          className="signup-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br />
        <button className="signup-button" onClick={handleSignup}>
          Sign Up
        </button>
        <p className="signup-toggle">
          Already have an account? <span className="login-toggle" onClick={toggleToLogin}>Login</span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
