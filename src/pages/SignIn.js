// src/pages/SignIn.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import permittedUsers from '../users'; // Import permitted users

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate(); // Hook to navigate to another page

  const handleSignInWithEmail = () => {
    // Check if email and password match any entry in permittedUsers
    if (permittedUsers[email] && permittedUsers[email] === password) {
      setSuccess(`Welcome, ${email}!`);
      setError('');
      console.log("User signed in:", email);

      // Navigate to the dashboard after successful sign-in
      navigate('/dashboard');
    } else {
      setError("Invalid email or password. Please try again.");
      setSuccess('');
      console.error("Sign-in failed");
    }
  };

  const handleForgotPassword = () => {
    console.log("Forgot Password clicked");
  };

  return (
    <div className="sign-in-container">
      <div className="sign-in-box">
        <h2>Sign In</h2>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSignInWithEmail}>Sign In with Email</button>
        <button className="google-btn">Sign in with Google</button>
        <button className="apple-btn">Sign in with Apple</button>
        <div className="forgot-password">
          <a href="#" onClick={handleForgotPassword}>Forgot Password?</a>
        </div>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
      </div>
    </div>
  );
};

export default SignIn;