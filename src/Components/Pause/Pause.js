import React, { useContext } from "react";

//Component
import ChangeNamePage from "./ChangeNamePage/ChangeNamePage";
import GameOverPage from "./GameOverPage/GameOverPage";

//Context
import { War } from "../../App";

function Pause() {
  const { gameOver } = useContext(War);
  return (
    <React.Fragment>
      {gameOver ? <GameOverPage /> : <ChangeNamePage />}
    </React.Fragment>
  );
}

export default Pause;
