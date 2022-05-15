import React from "react";

//Styles
import { ActiveBounce } from "../../../StyledComponents/Button";
import { WelcomeCard } from "../../../StyledComponents/MainCard";

function WelcomePage() {
  return (
    <WelcomeCard>
      <img
        src={process.env.PUBLIC_URL + "/images/card-symbols.png"}
        alt="card symbols"
      />
      <h1>Lets Start A War</h1>
      <ActiveBounce>Charge!</ActiveBounce>
    </WelcomeCard>
  );
}

export default WelcomePage;
