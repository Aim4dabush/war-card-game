import React, { useState } from "react";

//Components
import PlayerNamePage from "./PlayerNamePage/PlayerNamePage";
import StartGamePage from "./StartGamePage/StartGamePage";
import WelcomePage from "./WelcomePage/WelcomePage";

function Intro() {
  const [playerReady, setPlayerReady] = useState(false);
  const [ready, setReady] = useState(false);

  return (
    <React.Fragment>
      {!ready && <WelcomePage setReady={setReady} />}
      {ready && !playerReady && (
        <PlayerNamePage setPlayerReady={setPlayerReady} />
      )}
      {ready && playerReady && <StartGamePage />}
    </React.Fragment>
  );
}

export default Intro;
