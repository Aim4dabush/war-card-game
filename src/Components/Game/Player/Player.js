import React, { useContext } from "react";

//Context
import { War } from "../../../App";

//Styles
import { PlayerCard } from "../../../StyledComponents/PlayerCards";

function Player() {
  const { playerName } = useContext(War);
  return (
    <PlayerCard>
      <div className="header">
        <h2>Deck: 0</h2>
        <h2>{playerName}</h2>
        <h2>Pile: 0</h2>
      </div>
    </PlayerCard>
  );
}

export default Player;
