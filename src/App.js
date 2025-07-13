// src/App.js
import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import GameCards from './components/GameCard';
import { auth } from './firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import './components/GameCard.css'; // optional if header is here

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth);
  };

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
      ) : (
        <Login onLogin={() => setUser(auth.currentUser)} />
      )}
    </div>
  );
}

export default App;
