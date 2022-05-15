import styled from "styled-components";
import { backgroundColor, playerColor, primaryColor } from "./Variables";

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

  @keyframes symbols {
    to {
      transform: translateX(170%);
    }
  }
`;
