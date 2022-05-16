import styled from "styled-components";
import { primaryColor, secondaryColor } from "../StyledComponents/Variables";

export const Button = styled.button`
  background-color: ${primaryColor};
  border: 2px solid ${secondaryColor};
  border-radius: 5px;
  color: ${secondaryColor};
  cursor: pointer;
  font-size: 25px;
  padding: 5px 10px;
  width: fit-content;
`;

export const ActiveBounce = styled(Button)`
  animation: activeBounce 1000ms infinite alternate ease-out;

  @keyframes activeBounce {
    to {
      transform: translateY(-30px);
    }
  }
`;

export const ActivePulse = styled(Button)`
  animation: activePulse 1000ms infinite ease-out;

  @keyframes activePulse {
    70% {
      transform: scale(1.5);
    }
    80% {
      transform: scale(1);
    }
    90% {
      transform: scale(1.3);
    }
    100% {
      transform: scale(1);
    }
  }
`;
