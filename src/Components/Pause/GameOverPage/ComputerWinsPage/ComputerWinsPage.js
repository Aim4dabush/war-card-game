import React, { useContext } from "react";

//Context
import { War } from "../../../../App";

//Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceSadTear,
  faSkullCrossbones,
} from "@fortawesome/pro-regular-svg-icons";

//Styles
import { ComputerWinsCard } from "../../../../StyledComponents/MainCard";
import { HoverPulse } from "../../../../StyledComponents/Button";

function ComputerWinsPage() {
  const { setGameOver, setPauseGame } = useContext(War);

  const handleNextGame = () => {
    setGameOver(false);
    setPauseGame(false);
  };

  return (
    <ComputerWinsCard>
      <FontAwesomeIcon className="sad-face" icon={faFaceSadTear} />
      <h1>Computer Wins!</h1>
      <div className="skulls">
        <FontAwesomeIcon className="skull skullOne" icon={faSkullCrossbones} />
        <FontAwesomeIcon className="skull skullTwo" icon={faSkullCrossbones} />
        <FontAwesomeIcon
          className="skull skullThree"
          icon={faSkullCrossbones}
        />
        <FontAwesomeIcon className="skull skullFour" icon={faSkullCrossbones} />
        <FontAwesomeIcon className="skull skullFive" icon={faSkullCrossbones} />
        <FontAwesomeIcon className="skull skullSix" icon={faSkullCrossbones} />
        <FontAwesomeIcon
          className="skull skullSeven"
          icon={faSkullCrossbones}
        />
        <FontAwesomeIcon
          className="skull skullEight"
          icon={faSkullCrossbones}
        />
      </div>
      <HoverPulse className="next-game" onClick={handleNextGame}>
        Next Game
      </HoverPulse>
    </ComputerWinsCard>
  );
}

export default ComputerWinsPage;
