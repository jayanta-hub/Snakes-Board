import React from "react";
import "./App.css";

const BOARD_SIZE = 10;
const App: React.FC = () => {
  /**
   * Renders the game board as a 2D array of cells.
   *
   * @return {JSX.Element[]} An array of JSX elements representing the rows of the board.
   */

  const renderBoard = (): JSX.Element[] => {
    const rows: JSX.Element[] = [];
    let isRowReversed = false;
    for (let rowIndex = BOARD_SIZE; rowIndex > 0; rowIndex--) {
      const rowCells: JSX.Element[] = [];
      for (let colIndex = 0; colIndex < BOARD_SIZE; colIndex++) {
        const cellNumber =
          rowIndex * BOARD_SIZE -
          (!isRowReversed ? colIndex : BOARD_SIZE - colIndex - 1);
        rowCells.push(renderCell(cellNumber));
      }

      rows.push(
        <div key={rowIndex} className="row">
          {rowCells}
        </div>
      );

      isRowReversed = !isRowReversed;
    }

    return rows;
  };

  // Render each cell
  const renderCell = (cellNumber: number) => {
    return (
      <div
        key={cellNumber}
        className="cell"
        style={{
          backgroundColor: cellNumber % 2 === 0 ? "#ffffff" : "#ff0000",
        }}
      >
        {cellNumber}
      </div>
    );
  };

  return (
    <div className="app">
      <div className="board">{renderBoard()}</div>
    </div>
  );
};

export default App;
