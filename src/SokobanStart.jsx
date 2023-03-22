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
      <button class="btn btn-primary" onClick={startGame}>Graj</button><br />
      <a class="btn btn-light" href="https://github.com/rerecum/Sokoban/blob/Sokoban/README.md" target="_blank" rel="noreferrer">Założenie projektowe</a>
      </div> <br />
      <button class="levels btn btn-dark" onClick={startGame}>Poziom 1</button>
      <button disabled={!warunek} class="levels btn btn-dark">Poziom 2</button>
      <button disabled={!warunek} class="levels btn btn-dark">Poziom 3</button>
      <button disabled={!warunek} class="levels btn btn-dark">Poziom 4</button>
      <button disabled={!warunek} class="levels btn btn-dark">Poziom 5</button>
      <button disabled={!warunek} class="levels btn btn-dark">Poziom 6</button>
    </div>
  );
}

export default Menu;