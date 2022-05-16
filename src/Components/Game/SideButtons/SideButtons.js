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

function SideButtons() {
  const { setGameOver, setPauseGame } = useContext(War);

  const handleChangeName = () => {
    setPauseGame(true);
  };

  const handleNewGame = () => {
    setGameOver(true);
    setPauseGame(true);
  };

  return (
    <SideBar>
      <HoverBounce onClick={handleNewGame}>New Game</HoverBounce>
      <div className="switch">
        <Button className="deal-cards">Deal Cards</Button>
        <HoverBounce className="deck">
          <FontAwesomeIcon icon={faCards} />
        </HoverBounce>
      </div>
      <HoverFlip>Flip Cards</HoverFlip>
      <HoverBounce className="shuffle">
        <span>Shuffle</span>
      </HoverBounce>
      <HoverBounce onClick={handleChangeName}>Change Name</HoverBounce>
    </SideBar>
  );
}

export default SideButtons;
