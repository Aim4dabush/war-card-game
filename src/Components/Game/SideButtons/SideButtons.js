import React, { useContext } from "react";

//Context
import { War } from "../../../App";

//Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCards } from "@fortawesome/pro-regular-svg-icons";

//Styles
import {
  Button,
  HoverBounce,
  HoverFlip,
} from "../../../StyledComponents/Button";
import { SideBar } from "../../../StyledComponents/SideBar";

//Utilities
import { getDeck } from "../../../Utilities/Utilities";

function SideButtons({
  cardsDealt,
  computerCard,
  computerPile,
  playerCard,
  playerPile,
  setCardsDealt,
  setComputerCard,
  setComputerPile,
  setPlayerCard,
  setPlayerPile,
}) {
  const {
    computerDeck,
    deck,
    playerDeck,
    setComputerDeck,
    setDeck,
    setGameOver,
    setPauseGame,
    setPlayerDeck,
  } = useContext(War);

  const handleChangeName = () => {
    setPauseGame(true);
  };

  const handleDealCards = () => {
    setCardsDealt(true);
    deck.map((card) => {
      if (card.value === "ACE") {
        return (card.value = "14");
      }
      if (card.value === "KING") {
        return (card.value = "13");
      }
      if (card.value === "QUEEN") {
        return (card.value = "12");
      }
      if (card.value === "JACK") {
        return (card.value = "11");
      }
      return setDeck(deck);
    });
    setComputerDeck(deck.splice(0, 26));
    setPlayerDeck(deck.splice(0, 26));
  };

  const handleFlipCards = () => {};

  const handleNewGame = () => {
    getDeck().then((cards) => {
      const deck = cards.map((card) => {
        return { code: card.code, image: card.image, value: card.value };
      });
      setDeck(deck);
    });
    setComputerCard({});
    setComputerDeck([]);
    setComputerPile([]);
    setPlayerCard({});
    setPlayerDeck([]);
    setPlayerPile([]);
  };

  const handleShuffle = () => {};

  return (
    <SideBar>
      <HoverBounce onClick={handleNewGame}>New Game</HoverBounce>
      {!cardsDealt && (
        <div className="switch">
          <Button className="deal-cards" onClick={handleDealCards}>
            Deal Cards
          </Button>
          <HoverBounce className="deck" onClick={handleDealCards}>
            <FontAwesomeIcon icon={faCards} />
          </HoverBounce>
        </div>
      )}
      {cardsDealt && (
        <HoverFlip onClick={handleFlipCards}>Flip Cards</HoverFlip>
      )}
      {cardsDealt && (playerDeck.length === 0 || computerDeck.length === 0) && (
        <HoverBounce className="shuffle" onClick={handleShuffle}>
          <span>Shuffle</span>
        </HoverBounce>
      )}
      <HoverBounce onClick={handleChangeName}>Change Name</HoverBounce>
    </SideBar>
  );
}

export default SideButtons;
