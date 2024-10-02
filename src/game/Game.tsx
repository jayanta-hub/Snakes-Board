// src/components/Game.tsx
import React, { useState } from "react";
import { snakes, ladders } from "../data/snakesAndLadders";
import Board from "../pages/board/Board";
import Player from "../pages/player/Player";

const Game: React.FC = () => {
  const [playerPosition, setPlayerPosition] = useState(1);

  const rollDice = () => {
    const diceValue = Math.floor(Math.random() * 6) + 1;
    let newPosition = playerPosition + diceValue;

    // Handle snake or ladder logic
    if (newPosition in snakes) {
      newPosition = snakes[newPosition];
    } else if (newPosition in ladders) {
      newPosition = ladders[newPosition];
    }

    // Ensure new position is within bounds (1 to 100)
    if (newPosition <= 100) {
      setPlayerPosition(newPosition);
    }
  };

  return (
    <div>
      <Board size={10} />
      <Player position={playerPosition} />
      <button onClick={rollDice}>Roll Dice</button>
    </div>
  );
};

export default Game;
