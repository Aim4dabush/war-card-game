import React, { useContext } from "react";

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

function ChangeNamePage() {
  const { playerName, setPlayerName, setPauseGame } = useContext(War);

  const handleInputOnChange = (e) => {
    setPlayerName(e.target.value);
  };

  const handleChangeName = () => {
    setPauseGame(false);
  };

  return (
    <PlayerNameCard>
      <div className="symbols">
        <FontAwesomeIcon icon={faClub} />
        <FontAwesomeIcon icon={faDiamond} />
        <FontAwesomeIcon icon={faHeart} />
        <FontAwesomeIcon icon={faSpade} />
      </div>
      <h1>Change Your Name</h1>
      <input type="text" value={playerName} onChange={handleInputOnChange} />
      <div className="rotate">
        <Button className="enter-button" onClick={handleChangeName}>
          Change Name
        </Button>
        <Button className="rifle" onClick={handleChangeName}>
          <FontAwesomeIcon icon={faPersonRifle} />
        </Button>
      </div>
    </PlayerNameCard>
  );
}

export default ChangeNamePage;
