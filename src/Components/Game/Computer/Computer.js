import React, { useContext } from "react";

//Context
import { War } from "../../../App";

//Styles
import { Card } from "../../../StyledComponents/Card";
import { ComputerCard } from "../../../StyledComponents/PlayerCards";

function Computer({ computerCard, computerPile }) {
  const { computerDeck } = useContext(War);

  return (
    <ComputerCard>
      <div className="header">
        <h2>Deck: {computerDeck?.length}</h2>
        <h2>Computer</h2>
        <h2>Pile: {computerPile?.length}</h2>
      </div>
      <div className="cards">
        <Card />
        <Card src={computerCard.image} alt={computerCard.code} />
      </div>
    </ComputerCard>
  );
}

export default Computer;
