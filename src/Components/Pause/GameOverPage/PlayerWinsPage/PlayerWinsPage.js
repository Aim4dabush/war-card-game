import React, { useContext } from "react";

//Context
import { War } from "../../../../App";

//Fontawesome
import { faAward, faBalloon } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Styles
import { HoverPulse } from "../../../../StyledComponents/Button";
import { PlayerWinsCard } from "../../../../StyledComponents/MainCard";

//Utilities
import { getDeck } from "../../../../Utilities/Utilities";

function PlayerWinsPage() {
  const {
    playerName,
    setCardsDealt,
    setComputerCard,
    setComputerDeck,
    setComputerPile,
    setDeck,
    setGameOver,
    setOutOfCards,
    setPauseGame,
    setPlayerCard,
    setPlayerDeck,
    setPlayerPile,
    setStartGame,
  } = useContext(War);

  const handleNextGame = () => {
    getDeck().then((cards) => {
      const modDeck = cards.map((card) => {
        return { code: card.code, image: card.image, value: card.value };
      });
      setDeck(modDeck);
    });
    setCardsDealt(false);
    setComputerCard({});
    setComputerDeck([]);
    setComputerPile([]);
    setGameOver(false);
    setOutOfCards(false);
    setPauseGame(false);
    setPlayerCard({});
    setPlayerDeck([]);
    setPlayerPile([]);
    setStartGame(true);
  };

  return (
    <PlayerWinsCard>
      <FontAwesomeIcon className="award" icon={faAward} />
      <h1>{playerName} Wins!</h1>
      <div className="balloons">
        <FontAwesomeIcon className="balloon balloonOne" icon={faBalloon} />
        <FontAwesomeIcon className="balloon balloonTwo" icon={faBalloon} />
        <FontAwesomeIcon className="balloon balloonThree" icon={faBalloon} />
        <FontAwesomeIcon className="balloon balloonFour" icon={faBalloon} />
        <FontAwesomeIcon className="balloon balloonFive" icon={faBalloon} />
        <FontAwesomeIcon className="balloon balloonSix" icon={faBalloon} />
        <FontAwesomeIcon className="balloon balloonSeven" icon={faBalloon} />
        <FontAwesomeIcon className="balloon balloonEight" icon={faBalloon} />
      </div>
      <HoverPulse className="next-game" onClick={handleNextGame}>
        Next Game
      </HoverPulse>
    </PlayerWinsCard>
  );
}
export default PlayerWinsPage;
