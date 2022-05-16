import React from "react";

//Styles
import { ActiveBounce } from "../../../StyledComponents/Button";
import { WelcomeCard } from "../../../StyledComponents/MainCard";

//Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJetFighter } from "@fortawesome/pro-regular-svg-icons";

function WelcomePage({ setReady }) {
  const handleCharge = () => {
    setReady(true);
  };

  return (
    <WelcomeCard>
      <FontAwesomeIcon icon={faJetFighter} className="jet" />
      <h1>Lets Start A War</h1>
      <ActiveBounce onClick={handleCharge}>Charge!</ActiveBounce>
    </WelcomeCard>
  );
}

export default WelcomePage;
