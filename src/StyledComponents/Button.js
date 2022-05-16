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
  width: 184px;
`;

export const ActiveBounce = styled(Button)`
  animation: activeBounce 1000ms infinite alternate ease-out;

  @keyframes activeBounce {
    to {
      transform: translateY(-20px);
    }
  }
`;

export const ActivePulse = styled(Button)`
  animation: activePulse 1000ms infinite ease-out;
  transform: scale(1);

  @keyframes activePulse {
    85% {
      transform: scale(1.3);
    }
    90% {
      transform: scale(1.1);
    }
    95% {
      transform: scale(1.3);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export const HoverBounce = styled(Button)`
  &:hover {
    animation: bounce 500ms infinite alternate ease-out;
  }

  @keyframes bounce {
    to {
      transform: translateY(-15px);
    }
  }
`;

export const HoverFlip = styled(Button)`
  &:hover {
    animation: flip 500ms 1 forwards linear;
  }

  @keyframes flip {
    50% {
      transform: rotateX(180deg);
    }
    100% {
      transform: rotateX(360deg);
    }
  }
`;

export const HoverPulse = styled(Button)`
  transform: scale(1);
  &:hover {
    animation: bounce 1000ms infinite ease-out;
  }

  @keyframes bounce {
    85% {
      transform: scale(1.3);
    }
    90% {
      transform: scale(1.1);
    }
    95% {
      transform: scale(1.3);
    }
    100% {
      transform: scale(1);
    }
  }
`;
