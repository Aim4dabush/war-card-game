import styled from "styled-components";
import {
  backgroundColor,
  computerColor,
  playerColor,
  primaryColor,
  shadow,
} from "./Variables";

const PlayersCard = styled.div`
  align-items: center;
  color: ${primaryColor};
  display: flex;
  flex-direction: column;
  height: 49.8%;
  position: absolute;
  width: 85%;
`;

export const PlayerCard = styled(PlayersCard)`
  background-color: ${playerColor};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  bottom: 2px;
  justify-content: flex-end;
  left: 2px;

  .active-card {
    background-color: ${backgroundColor};
  }

  .cards {
    display: flex;
    height: 100%;
    justify-content: space-evenly;
    position: relative;
    top: 12px;
    width: 100%;
  }

  .deck-bg {
    position: relative;
  }

  .deck-img {
    height: 350px;
    left: 0;
    position: absolute;
    top: 0;
    width: 250px;
  }

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
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  left: 2px;
  top: 2px;

  .active-card {
    background-color: ${backgroundColor};
  }

  .cards {
    display: flex;
    height: 100%;
    justify-content: space-evenly;
    position: relative;
    top: 82px;
    width: 100%;
  }

  .deck-bg {
    position: relative;
  }

  .deck-img {
    height: 350px;
    left: 0;
    position: absolute;
    top: 0;
    width: 250px;
  }

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
