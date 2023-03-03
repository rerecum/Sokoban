import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './Sokoban.css';

class Sokoban extends Component{
  constructor(props){
    super(props);
    this.state = {
      board: [
        [1, 1, 1, 1, 1],
        [1, 0, 0, 2, 1],
        [1, 0, 3, 0, 1],
        [1, 2, 0, 4, 1],
        [1, 1, 1, 1, 1]
      ],
      playerPos: [1, 1]
    };
  }

  movePlayer = (dx, dy) => {
    //Move the player in the specified direction (dx, dy)
    const [x, y] = this.state.playerPos;
    const newBoard = [...this.state.board];
    const nextX = x + dx;
    const nextY = y + dy;

    if (newBoard[nextX][nextY] === 0) {
      //The next title is empty, move the player there
      newBoard[x][y] = 0;
      newBoard[nextX][nextY] = 3;
      this.setState({ board: newBoard, playerPos: [nextX, nextY] });
    }else if (newBoard[nextX][nextY] === 2){
      //The next title has a box, check if we can push it
      const nextBoxX = nextX + dx;
      const nextBoxY = nextY + dy;
      if (newBoard[nextBoxX][nextBoxY] === 0){
        //Move the player and the box to the next title
        newBoard[x][y] = 0;
        newBoard[nextX][nextY] = 3;
        newBoard[nextBoxX][nextBoxY] = 2;
        this.setState({ board: newBoard, playerPos: [nextX, nextY] });
      }
    }
  };

  render(){
    const { board } = this.state;
    return (
      <div className="sokoban">
        {board.map((row, rowIndex) => (
          <div className="row" key={rowIndex}>
            {row.map((title, titleIndex) => (
              <div
                className={
                  title === 1 ? 'wall' : title === 2 ? 'box' : title === 3 ? 'player' : 'empty'
                }
                key={titleIndex}
                onClick={() => this.movePlayer(rowIndex - this.state.playerPos[0], titleIndex - this.state.playerPos[1])}
              />
              ))}
            </div>
        ))}
      </div>
    );
  }
}

export default Sokoban;

// ========================================
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render();