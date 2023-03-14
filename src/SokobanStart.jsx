import React, { useState } from 'react';
import Sokoban from './Sokoban.js';

function Menu() {
  const [showGame, setShowGame] = useState(false);

  const startGame = () => {
    setShowGame(true);
  }

  const backToMenu = () => {
    setShowGame(false);
  }

  if (showGame) {
    return <Sokoban backToMenu={backToMenu} />;
  }

  return (
    <div>
      <h1>Sokoban Beta</h1>
      <h5>Kacper Hnatyszyn 4prT5</h5>
      <button class="graj" onClick={startGame}>Graj</button>
    </div>
  );
}

export default Menu;