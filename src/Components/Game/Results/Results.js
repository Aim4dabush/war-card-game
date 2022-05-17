import React, { useContext } from "react";

//Context
import { War } from "../../../App";

//Styles
import { ResultsCard } from "../../../StyledComponents/ResultsCard";

function Results() {
  const { computerCard, playerCard } = useContext(War);
  return (
    <ResultsCard>
      {Number(playerCard?.value) === Number(computerCard?.value) && (
        <div className="tie"></div>
      )}
      {Number(playerCard?.value) > Number(computerCard?.value) && (
        <div className="win"></div>
      )}
      {Number(playerCard?.value) < Number(computerCard?.value) && (
        <div className="lose"></div>
      )}
    </ResultsCard>
  );
}

export default Results;
