import styled from "styled-components";
import {
  backgroundColor,
  computerColor,
  playerColor,
  primaryColor,
} from "./Variables";

const MainCard = styled.div`
  background-color: ${backgroundColor};
  border: 5px solid ${primaryColor};
  border-radius: 10px;
  color: ${primaryColor};
  height: 500px;
  width: 700px;
`;

export const WelcomeCard = styled(MainCard)`
  align-items: center;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;

  h1 {
    font-size: 50px;
    margin-top: 4em;
  }

  img {
    left: 0;
    position: absolute;
    top: 0;
    transform: translateX(-100%);
    width: 690px;
    height: 100px;
  }

  .jet {
    animation: jet 3000ms infinite ease-in;
    font-size: 75px;
    left: 0;
    position: absolute;
    top: 20%;
  }

  @keyframes jet {
    2% {
      transform: translateY(2px);
    }
    4% {
      transform: translateY(-2px);
    }
    6% {
      transform: translateY(2px);
    }
    8% {
      transform: translateY(-2px);
    }
    10% {
      transform: translateY(2px);
    }
    12% {
      transform: translateY(-2px);
    }
    14% {
      transform: translateY(0);
    }
    100% {
      left: 100%;
    }
  }
`;

export const PlayerNameCard = styled(MainCard)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;

  .enter-button {
    position: absolute;
    transform: rotateX(0deg) translateY(0);
    transform-origin: bottom;
    transition: transform 750ms linear;
  }

  h1 {
    font-size: 50px;
  }

  input {
    border: 2px solid ${primaryColor};
    border-radius: 5px;
    color: ${playerColor};
    font-size: 30px;
    padding: 5px 10px;
    text-align: center;
    width: 375px;
  }

  .rifle {
    height: 41px;
    font-size: 35px;
    padding: 1px 2px;
    position: absolute;
    transform: rotateX(87deg) translateY(-100%);
    transform-origin: top;
    transition: transform 750ms linear;
  }

  .rotate {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 41px;
    margin-top: 2em;
    perspective: 500px;
    position: relative;
    overflow: hidden;
    width: 164px;
  }

  .rotate:hover {
    animation: bounce 500ms infinite alternate ease-out 750ms;
  }

  .rotate:hover .enter-button {
    transform: rotateX(-87deg) translateY(100%);
  }

  .rotate:hover .rifle {
    transform: rotateX(0deg) translateY(0);
  }

  .symbols {
    animation: symbols 3000ms infinite linear;
    display: flex;
    justify-content: space-evenly;
    font-size: 50px;
    position: absolute;
    top: 0;
    left: -78%;
    width: 100%;
  }

  @keyframes bounce {
    to {
      transform: translateY(-10px);
    }
  }

  @keyframes symbols {
    to {
      transform: translateX(170%);
    }
  }
`;

export const StartGameCard = styled(MainCard)`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 1em;

  h1 {
    font-size: 50px;
    margin-top: 0;
  }

  h1 span {
    color: ${playerColor};
  }

  h3 {
    margin-top: 0;
  }

  ul {
    margin-top: 0;
  }
`;

export const PlayerWinsCard = styled(MainCard)`
  align-items: center;
  color: ${playerColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  padding: 1em;
  position: relative;

  .award {
    font-size: 75px;
  }

  .balloon {
    font-size: 30px;
  }

  .balloons {
    align-items: flex-end;
    display: flex;
    height: 100%;
    justify-content: space-between;
    position: absolute;
    width: 100%;
  }

  .balloonOne {
    animation: balloon 2000ms infinite ease-out;
  }

  .balloonTwo {
    animation: balloon 3000ms infinite ease-in-out;
  }

  .balloonThree {
    animation: balloon 2750ms infinite ease-in;
  }

  .balloonFour {
    animation: balloon 2500ms infinite ease-out;
  }

  .balloonFive {
    animation: balloon 2250ms infinite ease-in-out;
  }

  .balloonSix {
    animation: balloon 2500ms infinite ease-in;
  }

  .balloonSeven {
    animation: balloon 2000ms infinite ease-in-out;
  }

  .balloonEight {
    animation: balloon 2000ms infinite ease-out;
  }

  h1 {
    font-size: 50px;
  }

  .next-game {
    border: 3px solid ${playerColor};
    color: ${playerColor};
  }

  @keyframes ball {
    to {
      transform: translateY(-500px);
    }
  }
`;

export const ComputerWinsCard = styled(MainCard)`
  align-items: center;
  color: ${computerColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  position: relative;

  .next-game {
    border: 3px solid ${computerColor};
    color: ${computerColor};
  }

  .sad-face {
    font-size: 75px;
  }

  .skull {
    font-size: 30px;
  }

  .skulls {
    align-items: flex-end;
    display: flex;
    height: 100%;
    justify-content: space-between;
    position: absolute;
    width: 100%;
  }

  .skullOne {
    animation: balloon 2000ms infinite ease-out;
  }

  .skullTwo {
    animation: balloon 3000ms infinite ease-in-out;
  }

  .skullThree {
    animation: balloon 2750ms infinite ease-in;
  }

  .skullFour {
    animation: balloon 2500ms infinite ease-out;
  }

  .skullFive {
    animation: balloon 2250ms infinite ease-in-out;
  }

  .skullSix {
    animation: balloon 2500ms infinite ease-in;
  }

  .skullSeven {
    animation: balloon 2000ms infinite ease-in-out;
  }

  .skullEight {
    animation: balloon 2000ms infinite ease-out;
  }
`;
