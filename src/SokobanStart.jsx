import React, { useState } from 'react';
import Sokoban from './Sokoban.js';

function Menu() {
  const [showGame, setShowGame] = useState(false);

  const [warunek, _] = useState(false);
    if (warunek){
    }

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
    <div class="container">
        <h3>
        Sokoban Beta
        <small class="text-muted"> K.H.4prT5</small>
        </h3>
        <div class="btn-group">
      <a class="btn btn-primary" href="https://github.com/rerecum/Sokoban/blob/Sokoban/README.md" target="_blank" rel="noreferrer">Założenie projektowe</a>
      </div> <br />
      <button class="levels btn btn-dark" onClick={startGame}>Etap 1</button>
      <button disabled={!warunek} class="levels btn btn-dark">Etap 2</button>
      <button disabled={!warunek} class="levels btn btn-dark">Etap 3</button>
    </div>
  );
}

export default Menu;