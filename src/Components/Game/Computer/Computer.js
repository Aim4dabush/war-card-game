import React from "react";

//Styles
import { ComputerCard } from "../../../StyledComponents/PlayerCards";

function Computer() {
  return (
    <ComputerCard>
      <div className="header">
        <h2>Deck: 0</h2>
        <h2>Computer</h2>
        <h2>Pile: 0</h2>
      </div>
    </ComputerCard>
  );
}

export default Computer;
