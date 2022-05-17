import styled from "styled-components";
import { backgroundColor, primaryColor, secondaryColor } from "./Variables";

export const ResultsCard = styled.div`
  left: 41%;
  position: absolute;
  top: 45.5%;

  .lose {
    color: ${secondaryColor};
    font-size: 34px;
    height: 34px;
    overflow: hidden;
    position: relative;
    width: 65.5px;
    z-index: 1;
  }

  .lose:after {
    animation: spinOut 1000ms 1 ease-in;
    content: "LOSE";
    height: 100%;
    position: absolute;
    top: 0;
    transform: scaleY(0);
    transform-origin: left;
    width: 100%;
    z-index: 1;
  }

  .lose:before {
    animation: spinIn 1000ms 1 ease-out forwards;
    content: "LOSE";
    height: 100%;
    position: absolute;
    transform: translateX(-100%) scaleY(0);
    transform-origin: left;
    top: 0;
    width: 100%;
    z-index: 1;
  }

  .tie {
    color: ${backgroundColor};
    font-size: 34px;
    height: 34px;
    overflow: hidden;
    position: relative;
    width: 65.5px;
    z-index: 1;
  }

  .tie:after {
    animation: spinOut 1000ms 1 ease-in;
    content: "TIE";
    height: 100%;
    position: absolute;
    top: 0;
    transform: scaleY(0);
    transform-origin: left;
    width: 100%;
    z-index: 1;
  }

  .tie:before {
    animation: spinIn 1000ms 1 ease-out forwards;
    content: "TIE";
    height: 100%;
    position: absolute;
    transform: translateX(-100%) scaleY(0);
    transform-origin: left;
    top: 0;
    width: 100%;
    z-index: 1;
  }

  .win {
    color: ${primaryColor};
    font-size: 34px;
    height: 34px;
    overflow: hidden;
    position: relative;
    width: 65.5px;
    z-index: 1;
  }

  .win:after {
    animation: spinOut 1000ms 1 ease-in;
    content: "WIN";
    height: 100%;
    position: absolute;
    top: 0;
    transform: scaleY(0);
    transform-origin: left;
    width: 100%;
    z-index: 1;
  }

  .win:before {
    animation: spinIn 1000ms 1 ease-out forwards;
    content: "WIN";
    height: 100%;
    position: absolute;
    transform: translateX(-100%) scaleY(0);
    transform-origin: left;
    top: 0;
    width: 100%;
    z-index: 1;
  }

  @keyframes spinIn {
    100% {
      transform: translateX(0) scaleY(1) rotateX(360deg);
    }
  }

  @keyframes spinOut {
    50% {
      transform: scaleY(1);
    }
    100% {
      transform: translateX(100%) rotateX(180deg);
    }
  }
`;
