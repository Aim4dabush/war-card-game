import React, { useContext } from "react";

//Components
import ComputerWinsPage from "./ComputerWinsPage/ComputerWinsPage";
import PlayerWinsPage from "./PlayerWinsPage/PlayerWinsPage";

//Context
import { War } from "../../../App";

function GameOverPage() {
  const { playerDeck, computerDeck } = useContext(War);
  return (
    <React.Fragment>
      {computerDeck.length === 0 && <PlayerWinsPage />}
      {playerDeck.length === 0 && <ComputerWinsPage />}
    </React.Fragment>
  );
}

export default GameOverPage;
