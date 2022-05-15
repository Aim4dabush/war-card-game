import React from "react";

//Styles
import { Button } from "../../../StyledComponents/Button";
import { PlayerNameCard } from "../../../StyledComponents/MainCard";

//Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClub,
  faDiamond,
  faHeart,
  faPersonRifle,
  faSpade,
} from "@fortawesome/pro-regular-svg-icons";

function PlayerNamePage() {
  return (
    <PlayerNameCard>
      <div className="symbols">
        <FontAwesomeIcon icon={faClub} />
        <FontAwesomeIcon icon={faDiamond} />
        <FontAwesomeIcon icon={faHeart} />
        <FontAwesomeIcon icon={faSpade} />
      </div>
      <h1>Enter Your Name</h1>
      <input type="text" />
      <div className="rotate">
        <Button className="enter-button">Enter Name</Button>
        <Button className="rifle">
          <FontAwesomeIcon icon={faPersonRifle} />
        </Button>
      </div>
    </PlayerNameCard>
  );
}

export default PlayerNamePage;
