import { useState } from "react";

function Square({ value, onBoardClick }) {
  return (
    <button className="square" onClick={onBoardClick}>
      {value}
    </button>
  );
}

export default function Board() {
  const [board, setBoard] = useState(Array(9).fill(null));

  function handleClick() {
    console.log("the board was clicked!");
  }

  return (
    <>
      <div className="board-row">
        <Square value={board[0]} onBoardClick={handleClick} />
        <Square value={board[1]} onBoardClick={handleClick} />
        <Square value={board[2]} onBoardClick={handleClick} />
      </div>
      <div className="board-row">
        <Square value={board[3]} onBoardClick={handleClick} />
        <Square value={board[4]} onBoardClick={handleClick} />
        <Square value={board[5]} onBoardClick={handleClick} />
      </div>
      <div className="board-row">
        <Square value={board[6]} onBoardClick={handleClick} />
        <Square value={board[7]} onBoardClick={handleClick} />
        <Square value={board[8]} onBoardClick={handleClick} />
      </div>
    </>
  );
}
