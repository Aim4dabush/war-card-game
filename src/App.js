import React, { useState } from "react";

//Components
import Game from "./Components/Game/Game";
import Intro from "./Components/Intro/Intro";
import Pause from "./Components/Pause/Pause";

//Styles
import "./App.css";
import { Container } from "./StyledComponents/Container";

export const War = React.createContext({});

function App() {
  const [deck, setDeck] = useState([]);
  const [computerDeck, setComputerDeck] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [pauseGame, setPauseGame] = useState(false);
  const [playerDeck, setPlayerDeck] = useState([]);
  const [playerName, setPlayerName] = useState("Player");
  const [startGame, setStartGame] = useState(false);

  return (
    <War.Provider
      value={{
        computerDeck: computerDeck,
        deck: deck,
        gameOver: gameOver,
        playerDeck: playerDeck,
        playerName: playerName,
        setComputerDeck: setComputerDeck,
        setDeck: setDeck,
        setGameOver: setGameOver,
        setPauseGame: setPauseGame,
        setPlayerDeck: setPlayerDeck,
        setPlayerName: setPlayerName,
        setStartGame: setStartGame,
      }}
    >
      <Container>
        {!startGame && !pauseGame && <Intro />}
        {startGame && !pauseGame && <Game />}
        {pauseGame && <Pause />}
      </Container>
    </War.Provider>
  );
}

export default App;
