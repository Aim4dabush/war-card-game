import React from "react";

//Context
import { War } from "../../../App";

//Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClub,
  faDiamond,
  faHeart,
  faPersonRifle,
  faSpade,
} from "@fortawesome/pro-regular-svg-icons";

//Styles
import { Button } from "../../../StyledComponents/Button";
import { PlayerNameCard } from "../../../StyledComponents/MainCard";
import { useContext } from "react";

function PlayerNamePage({ setPlayerReady }) {
  const { playerName, setPlayerName } = useContext(War);

  const handleInputOnChange = (e) => {
    setPlayerName(e.target.value);
  };

  const handleEnterName = () => {
    setPlayerReady(true);
  };

  return (
    <PlayerNameCard>
      <div className="symbols">
        <FontAwesomeIcon icon={faClub} />
        <FontAwesomeIcon icon={faDiamond} />
        <FontAwesomeIcon icon={faHeart} />
        <FontAwesomeIcon icon={faSpade} />
      </div>
      <h1>Enter Your Name</h1>
      <input type="text" value={playerName} onChange={handleInputOnChange} />
      <div className="rotate">
        <Button className="enter-button" onClick={handleEnterName}>
          Enter Name
        </Button>
        <Button className="rifle" onClick={handleEnterName}>
          <FontAwesomeIcon icon={faPersonRifle} />
        </Button>
      </div>
    </PlayerNameCard>
  );
}

export default PlayerNamePage;
