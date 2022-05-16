import React, { useState } from "react";

//Components
import Game from "./Components/Game/Game";
import Intro from "./Components/Intro/Intro";

//Styles
import "./App.css";
import { Container } from "./StyledComponents/Container";

export const War = React.createContext({});

function App() {
  const [deck, setDeck] = useState([]);
  const [playerName, setPlayerName] = useState("Player");
  const [startGame, setStartGame] = useState(false);

  return (
    <War.Provider
      value={{
        deck: deck,
        playerName: playerName,
        setDeck: setDeck,
        setPlayerName: setPlayerName,
        setStartGame: setStartGame,
      }}
    >
      <Container>{!startGame ? <Intro /> : <Game />}</Container>
    </War.Provider>
  );
}

export default App;
