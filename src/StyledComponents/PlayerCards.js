import styled from "styled-components";
import { computerColor, playerColor, primaryColor, shadow } from "./Variables";

const PlayersCard = styled.div`
  align-items: center;
  border-radius: 10px;
  color: ${primaryColor};
  display: flex;
  flex-direction: column;
  height: 49.8%;
  position: absolute;
  width: 85%;
`;

export const PlayerCard = styled(PlayersCard)`
  background-color: ${playerColor};
  bottom: 2px;
  justify-content: flex-end;
  left: 2px;

  .header {
    background-color: ${playerColor};
    border-radius: 10px;
    bottom: 0;
    box-shadow: 2px -2px 0 4px ${shadow};
    display: flex;
    height: 65px;
    justify-content: space-evenly;
    position: absolute;
    left: 0;
    width: 1518px;
  }
`;

export const ComputerCard = styled(PlayersCard)`
  background-color: ${computerColor};
  left: 2px;
  top: 2px;

  .header {
    align-items: flex-end;
    background-color: ${computerColor};
    border-radius: 10px;
    box-shadow: 2px 2px 0 4px ${shadow};
    display: flex;
    height: 65px;
    justify-content: space-evenly;
    left: 0;
    position: absolute;
    top: 0;
    width: 1518px;
  }
`;
