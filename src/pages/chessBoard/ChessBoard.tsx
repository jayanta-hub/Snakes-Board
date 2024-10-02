import React from "react";

const BOARD_SIZE = 8;

// Types for Chess Pieces and Board
type Piece = "rook" | "knight" | "bishop" | "queen" | "king" | "pawn" | null;
type Player = "white" | "black" | null;

interface ChessPiece {
  type: Piece;
  player: Player;
}

const initialBoard: (ChessPiece | null)[][] = [
  [
    { type: "rook", player: "black" },
    { type: "knight", player: "black" },
    { type: "bishop", player: "black" },
    { type: "queen", player: "black" },
    { type: "king", player: "black" },
    { type: "bishop", player: "black" },
    { type: "knight", player: "black" },
    { type: "rook", player: "black" },
  ],
  [
    { type: "pawn", player: "black" },
    { type: "pawn", player: "black" },
    { type: "pawn", player: "black" },
    { type: "pawn", player: "black" },
    { type: "pawn", player: "black" },
    { type: "pawn", player: "black" },
    { type: "pawn", player: "black" },
    { type: "pawn", player: "black" },
  ],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [
    { type: "pawn", player: "white" },
    { type: "pawn", player: "white" },
    { type: "pawn", player: "white" },
    { type: "pawn", player: "white" },
    { type: "pawn", player: "white" },
    { type: "pawn", player: "white" },
    { type: "pawn", player: "white" },
    { type: "pawn", player: "white" },
  ],
  [
    { type: "rook", player: "white" },
    { type: "knight", player: "white" },
    { type: "bishop", player: "white" },
    { type: "queen", player: "white" },
    { type: "king", player: "white" },
    { type: "bishop", player: "white" },
    { type: "knight", player: "white" },
    { type: "rook", player: "white" },
  ],
];

const ChessBoard: React.FC = () => {
  const renderPiece = (piece: ChessPiece | null) => {
    if (!piece) return null;

    // Render the piece symbol (simple Unicode for now)
    let symbol = "";
    switch (piece.type) {
      case "rook":
        symbol = piece.player === "white" ? "♖" : "♜";
        break;
      case "knight":
        symbol = piece.player === "white" ? "♘" : "♞";
        break;
      case "bishop":
        symbol = piece.player === "white" ? "♗" : "♝";
        break;
      case "queen":
        symbol = piece.player === "white" ? "♕" : "♛";
        break;
      case "king":
        symbol = piece.player === "white" ? "♔" : "♚";
        break;
      case "pawn":
        symbol = piece.player === "white" ? "♙" : "♟";
        break;
    }

    return <span>{symbol}</span>;
  };

  const renderSquare = (row: number, col: number) => {
    const isBlack = (row + col) % 2 === 1;
    const piece = initialBoard[row][col];

    return (
      <div
        key={`${row}-${col}`}
        className={`square ${isBlack ? "black-square" : "white-square"}`}
      >
        {renderPiece(piece)}
      </div>
    );
  };

  return (
    <div className="board">
      {Array.from({ length: BOARD_SIZE }).map((_, row) => (
        <div key={row} className="row">
          {Array.from({ length: BOARD_SIZE }).map((_, col) =>
            renderSquare(row, col)
          )}
        </div>
      ))}
    </div>
  );
};

export default ChessBoard;
