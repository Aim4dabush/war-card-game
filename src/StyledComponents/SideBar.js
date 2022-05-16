import styled from "styled-components";
import { primaryColor, secondaryColor } from "./Variables";

export const SideBar = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-evenly;
  position: relative;
  width: 15%;

  .deal-cards {
    left: 0;
    position: absolute;
    top: 0;
    transform: rotateX(0deg) translateY(0);
    transform-origin: bottom;
    transition: transform 500ms linear;
  }

  .deck {
    transform: rotateX(90deg) translateY(-100%);
    transform-origin: top;
    transition: transform 500ms linear;
  }

  .shuffle {
    overflow: hidden;
    position: relative;
    transition: color 500ms linear, border 500ms linear;
    z-index: 1;
  }

  .shuffle:hover {
    border: 2px solid ${primaryColor};
    color: ${primaryColor};
  }

  .shuffle:after {
    background-color: ${secondaryColor};
    content: "";
    height: 41px;
    left: 46px;
    position: absolute;
    top: -2px;
    transform: translateY(-100%);
    transform-origin: bottom;
    transition: transform 500ms ease-in 500ms;
    width: 46px;
    z-index: -1;
  }

  .shuffle:hover:after {
    transform: translateY(0) rotateY(360deg);
  }

  .shuffle:before {
    background-color: ${secondaryColor};
    content: "";
    height: 41px;
    left: 0;
    position: absolute;
    top: -2px;
    transform: translateX(-100%);
    transform-origin: left;
    transition: transform 500ms ease-in;
    width: 46px;
  }

  .shuffle:hover:before {
    transform: translateX(0) rotateX(360deg);
  }

  .shuffle span:after {
    background-color: ${secondaryColor};
    content: "";
    height: 41px;
    position: absolute;
    right: 0;
    top: -2px;
    transform: translateX(100%);
    transform-origin: right;
    transition: transform 500ms ease-in 750ms;
    width: 46px;
    z-index: -1;
  }

  .shuffle:hover span:after {
    transform: translateX(0) rotateX(360deg);
  }

  .shuffle span:before {
    background-color: ${secondaryColor};
    content: "";
    height: 41px;
    position: absolute;
    right: 46px;
    top: -2px;
    transform: translateY(100%);
    transform-origin: top;
    transition: transform 500ms ease-in 1000ms;
    width: 46px;
    z-index: -1;
  }

  .shuffle:hover span:before {
    transform: translateY(0) rotateY(360deg);
  }

  .switch {
    height: 41px;
    position: relative;
    width: 184px;
    transition-delay: 500ms;
  }

  .switch:hover .deal-cards {
    transform: rotateX(90deg) translateY(100%);
  }

  .switch:hover .deck {
    transform: rotateY(0deg) translateY(0);
  }
`;
