import React from 'react';
import './GameCard.css';

const GameCards = () => {
  
  const games = [];

  return (
    <div>
      

      <div className="game-grid">
        {games.map((game) => (
          <a
            key={game.id}
            href={game.url}
            target="_blank"
            rel="noopener noreferrer"
            className="game-card"
          >
            <div className="game-image">{game.image}</div>
            <div className="game-title">{game.name}</div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default GameCards;
