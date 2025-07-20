import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import GameCards from './components/GameCard';
import { auth } from './firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import './components/Login.css'; 
import './components/GameCard.css';
import './components/Signup.css'; 

function App() {
  const [user, setUser] = useState(null);
  const [showSignup, setShowSignup] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = () => signOut(auth);
  const toggleForm = () => setShowSignup((prev) => !prev);

  return (
    <div>
      {user ? (
        <>
          <header className="header">
            <button className="home-button" onClick={handleLogout}>Logout</button>
            <input type="text" placeholder="Search games..." className="search-input" />
            <span className="header-title">Welcome to, GämeIt̤</span>
          </header>
          <GameCards />
        </>
      ) : showSignup ? (
        <Signup onSignupSuccess={() => setUser(auth.currentUser)} toggleToLogin={toggleForm} />
      ) : (
        <Login onLoginSuccess={() => setUser(auth.currentUser)} toggleToSignup={toggleForm} />
      )}
    </div>
  );
}

export default App;
