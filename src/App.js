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
  const [cardsDealt, setCardsDealt] = useState(false);
  const [computerCard, setComputerCard] = useState({});
  const [computerDeck, setComputerDeck] = useState([]);
  const [computerPile, setComputerPile] = useState([]);
  const [deck, setDeck] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [outOfCards, setOutOfCards] = useState(false);
  const [pauseGame, setPauseGame] = useState(false);
  const [playerCard, setPlayerCard] = useState({});
  const [playerDeck, setPlayerDeck] = useState([]);
  const [playerName, setPlayerName] = useState("Player");
  const [playerPile, setPlayerPile] = useState([]);
  const [startGame, setStartGame] = useState(false);

  return (
    <War.Provider
      value={{
        cardsDealt: cardsDealt,
        computerCard: computerCard,
        computerDeck: computerDeck,
        computerPile: computerPile,
        deck: deck,
        gameOver: gameOver,
        outOfCards: outOfCards,
        playerCard: playerCard,
        playerDeck: playerDeck,
        playerName: playerName,
        playerPile: playerPile,
        setCardsDealt: setCardsDealt,
        setComputerCard: setComputerCard,
        setComputerDeck: setComputerDeck,
        setComputerPile: setComputerPile,
        setDeck: setDeck,
        setGameOver: setGameOver,
        setOutOfCards: setOutOfCards,
        setPauseGame: setPauseGame,
        setPlayerCard: setPlayerCard,
        setPlayerDeck: setPlayerDeck,
        setPlayerName: setPlayerName,
        setPlayerPile: setPlayerPile,
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
