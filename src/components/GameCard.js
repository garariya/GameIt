import React from 'react';
import './GameCard.css';

const GameCards = () => {
  
  const games = [
    {
      id: 1,
      name: 'Soundpad',
      url: 'https://soundpad-lemon.vercel.app/',
      image: <img src="/images/soundpad.png" alt="Soundpad" />
    },
    {
      id: 2,
      name: 'War Game',
      url: 'https://aditya-war-game.vercel.app/',
      image: <img src="/images/wargame.png" alt="War Game" />
    },
    {
      id: 3,
      name: 'Dice Roll',
      url: 'https://aditya-dice-roll.vercel.app/',
      image: <img src="/images/diceroll.png" alt="Dice Roll" />
    }
  ];

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
