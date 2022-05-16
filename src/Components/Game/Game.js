import React from "react";

//Components
import Computer from "./Computer/Computer";
import Player from "./Player/Player";
import SideButtons from "./SideButtons/SideButtons";

//Styles
import { BoardCard } from "../../StyledComponents/BoardCard";

function Game() {
  return (
    <BoardCard>
      <div className="game-board">
        <Computer />
        <Player />
      </div>
      <SideButtons />
    </BoardCard>
  );
}

export default Game;
