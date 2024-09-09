import { useState } from "react";

function Square({ value }) {
  return <button className="square">{value}</button>;
}

export default function Board() {
  const [board, setBoard] = useState(Array(9).fill(null));

  return (
    <>
      <div className="board-row">
        <Square value={board[0]} />
        <Square value={board[1]} />
        <Square value={board[2]} />
      </div>
      <div className="board-row">
        <Square value={board[3]} />
        <Square value={board[4]} />
        <Square value={board[5]} />
      </div>
      <div className="board-row">
        <Square value={board[6]} />
        <Square value={board[7]} />
        <Square value={board[8]} />
      </div>
    </>
  );
}
