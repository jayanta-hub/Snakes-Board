// src/components/Player.tsx
import React from "react";

interface PlayerProps {
  position: number;
}

const Player: React.FC<PlayerProps> = ({ position }) => {
  return (
    <div className="player" style={{ gridArea: `cell${position}` }}>
      🧍
    </div>
  );
};

export default Player;
