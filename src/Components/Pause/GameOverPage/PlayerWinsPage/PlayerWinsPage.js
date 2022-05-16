import React, { useContext } from "react";

//Context
import { War } from "../../../../App";

//Fontawesome
import { faAward, faBalloon } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Styles
import { HoverPulse } from "../../../../StyledComponents/Button";
import { PlayerWinsCard } from "../../../../StyledComponents/MainCard";

function PlayerWinsPage() {
  const { playerName, setGameOver, setPauseGame } = useContext(War);

  const handleNextGame = () => {
    setGameOver(false);
    setPauseGame(false);
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
