import React from "react";

//Styles
import "./App.css";
import { Container } from "./StyledComponents/Container";

//Components
import Intro from "./Components/Intro/Intro";
import { useState } from "react";

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
      <Container>{!startGame && <Intro />}</Container>
    </War.Provider>
  );
}

export default App;
