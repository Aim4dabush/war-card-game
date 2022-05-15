import React from "react";

//Components
import PlayerNamePage from "./PlayerNamePage/PlayerNamePage";
import WelcomePage from "./WelcomePage/WelcomePage";

function Intro() {
  return (
    <div>
      <WelcomePage />
      <PlayerNamePage />
    </div>
  );
}

export default Intro;
