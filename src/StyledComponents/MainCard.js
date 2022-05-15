import styled from "styled-components";
import { backgroundColor, primaryColor } from "./Variables";

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

  img {
    animation: banner 2000ms infinite linear;
    left: 0;
    position: absolute;
    top: 0;
    transform: translateX(-100%);
    width: 690px;
    height: 100px;
  }

  h1 {
    font-size: 50px;
    margin-top: 5em;
  }

  @keyframes banner {
    to {
      transform: translateX(100%);
    }
  }
`;
