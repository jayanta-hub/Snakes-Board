// src/components/Board.tsx
import React from "react";
import "./Board.css";

interface BoardProps {
  size: number; // for size of the grid (e.g. 10 for 10x10)
}

const Board: React.FC<BoardProps> = ({ size }) => {
  const cells = Array.from({ length: size * size }, (_, i) => i + 1).reverse();
  console.log(cells.slice(0, size * 2));
  return (
    <div className="board">
      {cells.map((cell) => (
        <div key={cell} className="board-cell">
          {cell}
        </div>
      ))}
    </div>
  );
};

export default Board;
