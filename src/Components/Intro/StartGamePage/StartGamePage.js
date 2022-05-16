import React from "react";
import { useContext } from "react";

//Context
import { War } from "../../../App";

//Styles
import { ActivePulse } from "../../../StyledComponents/Button";
import { StartGameCard } from "../../../StyledComponents/MainCard";

//Utilities
import { getDeck } from "../../../Utilities/Utilities";

function StartGamePage() {
  const { playerName, setDeck, setStartGame } = useContext(War);

  const handleStartGame = () => {
    setStartGame(true);
    getDeck()
      .then((data) => {
        return data.deck_id;
      })
      .then((id) => {
        fetch(`https://deckofcardsapi.com/api/deck/${id}/draw/?count=52`)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            if (data.success) {
              return data.cards;
            }
          })
          .then((cards) => {
            setDeck(
              cards.map((card) => {
                return {
                  code: card.code,
                  image: card.image,
                  value: card.value,
                };
              })
            );
          });
      });
  };

  return (
    <StartGameCard>
      <h1>
        Good Luck <span>{playerName}!</span>
      </h1>
      <h3>Rules</h3>
      <ul>
        <li>No Eye Gauging</li>
        <li>No Hits Below The Belt</li>
      </ul>
      <h3>Objective</h3>
      <ul>
        <li>Ace is the highest card.</li>
        <li>King is the next highest.</li>
        <li>Followed by the queen and finally the jack.</li>
        <li>Flip over the top card of both decks.</li>
        <li>If you have the higher card you win both cards.</li>
        <li>If the computer has a higher card the computer gets both cards.</li>
        <li>When someone runs out of cards use the pile to play.</li>
        <li>No pile means no win.</li>
      </ul>
      <ActivePulse onClick={handleStartGame}>Start War</ActivePulse>
    </StartGameCard>
  );
}

export default StartGamePage;
