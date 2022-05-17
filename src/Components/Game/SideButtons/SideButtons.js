import React, { useContext } from "react";

//Context
import { War } from "../../../App";

//Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCards } from "@fortawesome/pro-regular-svg-icons";

//Styles
import {
  Button,
  HoverBounce,
  HoverFlip,
} from "../../../StyledComponents/Button";
import { SideBar } from "../../../StyledComponents/SideBar";

//Utilities
import { getDeck } from "../../../Utilities/Utilities";

function SideButtons() {
  const {
    cardsDealt,
    computerCard,
    computerDeck,
    computerPile,
    deck,
    outOfCards,
    playerCard,
    playerDeck,
    playerPile,
    setCardsDealt,
    setComputerCard,
    setComputerDeck,
    setComputerPile,
    setDeck,
    setGameOver,
    setOutOfCards,
    setPauseGame,
    setPlayerCard,
    setPlayerDeck,
    setPlayerPile,
    setStartGame,
  } = useContext(War);

  const handleChangeName = () => {
    setPauseGame(true);
  };

  const handleDealCards = () => {
    setCardsDealt(true);
    deck.map((card) => {
      if (card.value === "ACE") {
        return (card.value = "14");
      }
      if (card.value === "KING") {
        return (card.value = "13");
      }
      if (card.value === "QUEEN") {
        return (card.value = "12");
      }
      if (card.value === "JACK") {
        return (card.value = "11");
      }
      return setDeck(deck);
    });
    setComputerDeck(deck.splice(0, 26));
    setPlayerDeck(deck.splice(0, 26));
  };

  const handleFlipCards = () => {
    setComputerCard(computerDeck?.pop());
    setPlayerCard(playerDeck?.pop());
    if (playerDeck?.length === 0 || computerDeck?.length === 0) {
      setOutOfCards(true);
    }

    if (
      (playerDeck?.length === 0 && playerPile?.length === 0) ||
      (computerDeck?.length === 0 && computerPile?.length === 0)
    ) {
      setPauseGame(true);
      setGameOver(true);
    }

    if (Number(playerCard?.value) === Number(computerCard?.value)) {
      setDeck((prev) => {
        return [...prev, playerCard, computerCard];
      });
    }

    if (Number(playerCard?.value) > Number(computerCard?.value)) {
      if (deck.length !== 0) {
        setPlayerPile((prev) => {
          return [...prev, ...deck, playerCard, computerCard];
        });
        setDeck([]);
      } else {
        setPlayerPile((prev) => {
          return [...prev, playerCard, computerCard];
        });
      }
    }

    if (Number(playerCard?.value) < Number(computerCard?.value)) {
      if (deck.length !== 0) {
        setComputerPile((prev) => {
          return [...prev, ...deck, computerCard, playerCard];
        });
        setDeck([]);
      } else {
        setComputerPile((prev) => {
          return [...prev, computerCard, playerCard];
        });
      }
    }
  };

  const handleNewGame = () => {
    getDeck().then((cards) => {
      const modDeck = cards.map((card) => {
        return { code: card.code, image: card.image, value: card.value };
      });
      setDeck(modDeck);
    });
    setCardsDealt(false);
    setComputerCard({});
    setComputerDeck([]);
    setComputerPile([]);
    setGameOver(false);
    setOutOfCards(false);
    setPauseGame(false);
    setPlayerCard({});
    setPlayerDeck([]);
    setPlayerPile([]);
    setStartGame(true);
  };

  const handleShuffle = () => {
    if (Number(playerCard.value) === Number(computerCard.value)) {
      setComputerDeck((prev) => {
        return [...prev, ...computerPile];
      });
      setDeck((prev) => {
        return [...prev, playerCard, computerCard];
      });
      setPlayerDeck((prev) => {
        return [...prev, ...playerPile];
      });
      setComputerCard({});
      setComputerPile([]);
      setPlayerCard({});
      setPlayerPile([]);
      setOutOfCards(false);
    }

    if (Number(playerCard.value) > Number(computerCard.value)) {
      if (deck.length !== 0) {
        setComputerDeck((prev) => {
          return [...prev, ...computerPile];
        });
        setDeck([]);
        setPlayerDeck((prev) => {
          return [...prev, ...deck, computerCard, playerCard, ...playerPile];
        });
      } else {
        setComputerDeck((prev) => {
          return [...prev, ...computerPile];
        });
        setPlayerDeck((prev) => {
          return [...prev, computerCard, playerCard, ...playerPile];
        });
      }
      setComputerCard({});
      setComputerPile([]);
      setPlayerCard({});
      setPlayerPile([]);
      setOutOfCards(false);
    }

    if (Number(playerCard.value) < Number(computerCard.value)) {
      if (deck.length !== 0) {
        setComputerDeck((prev) => {
          return [...prev, ...deck, playerCard, computerCard, ...computerPile];
        });
        setPlayerDeck((prev) => {
          return [...prev, ...playerPile];
        });
        setDeck([]);
      } else {
        setComputerDeck((prev) => {
          return [...prev, playerCard, computerCard, ...computerPile];
        });
        setPlayerDeck((prev) => {
          return [...prev, ...playerPile];
        });
      }
      setComputerCard({});
      setComputerPile([]);
      setPlayerCard({});
      setPlayerPile([]);
      setOutOfCards(false);
    }
    shuffle(computerDeck);
    shuffle(playerDeck);
  };

  const shuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    console.log(arr);
  };

  return (
    <SideBar>
      <HoverBounce onClick={handleNewGame}>New Game</HoverBounce>
      {!cardsDealt && (
        <div className="switch">
          <Button className="deal-cards" onClick={handleDealCards}>
            Deal Cards
          </Button>
          <HoverBounce className="deck" onClick={handleDealCards}>
            <FontAwesomeIcon icon={faCards} />
          </HoverBounce>
        </div>
      )}
      {cardsDealt && !outOfCards && (
        <HoverFlip onClick={handleFlipCards}>Flip Cards</HoverFlip>
      )}
      {cardsDealt && outOfCards && (
        <HoverBounce className="shuffle" onClick={handleShuffle}>
          <span>Shuffle</span>
        </HoverBounce>
      )}
      <HoverBounce onClick={handleChangeName}>Change Name</HoverBounce>
    </SideBar>
  );
}

export default SideButtons;
