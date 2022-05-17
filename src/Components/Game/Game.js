import React, { useState } from "react";

//Components
import Computer from "./Computer/Computer";
import Player from "./Player/Player";
import SideButtons from "./SideButtons/SideButtons";

//Styles
import { BoardCard } from "../../StyledComponents/BoardCard";

function Game() {
  const [cardsDealt, setCardsDealt] = useState(false);
  const [computerCard, setComputerCard] = useState({});
  const [computerPile, setComputerPile] = useState([]);
  const [outOfCards, setOutOfCards] = useState(false);
  const [playerCard, setPlayerCard] = useState({});
  const [playerPile, setPlayerPile] = useState([]);

  return (
    <BoardCard>
      <div className="game-board">
        <Computer computerCard={computerCard} computerPile={computerPile} />
        <Player playerCard={playerCard} playerPile={playerPile} />
      </div>
      <SideButtons
        cardsDealt={cardsDealt}
        computerCard={computerCard}
        computerPile={computerPile}
        outOfCards={outOfCards}
        playerCard={playerCard}
        playerPile={playerPile}
        setCardsDealt={setCardsDealt}
        setComputerCard={setComputerCard}
        setComputerPile={setComputerPile}
        setOutOfCards={setOutOfCards}
        setPlayerCard={setPlayerCard}
        setPlayerPile={setPlayerPile}
      />
    </BoardCard>
  );
}

export default Game;
