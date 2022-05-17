import React from "react";

//Components
import Computer from "./Computer/Computer";
import Player from "./Player/Player";
import Results from "./Results/Results";
import SideButtons from "./SideButtons/SideButtons";

//Styles
import { BoardCard } from "../../StyledComponents/BoardCard";

function Game() {
  return (
    <BoardCard>
      <div className="game-board">
        <Computer />
        <Results />
        <Player />
      </div>
      <SideButtons />
    </BoardCard>
  );
}

export default Game;
