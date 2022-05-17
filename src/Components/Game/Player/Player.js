import React, { useContext } from "react";

//Context
import { War } from "../../../App";

//Styles
import { Card } from "../../../StyledComponents/Card";
import { PlayerCard } from "../../../StyledComponents/PlayerCards";

function Player() {
  const { playerCard, playerDeck, playerName, playerPile } = useContext(War);
  return (
    <PlayerCard>
      <div className="header">
        <h2>Deck: {playerDeck?.length}</h2>
        <h2>{playerName}</h2>
        <h2>Pile: {playerPile?.length}</h2>
      </div>
      <div className="cards">
        <Card />
        {playerCard && <Card src={playerCard?.image} alt={playerCard?.code} />}
      </div>
    </PlayerCard>
  );
}

export default Player;
