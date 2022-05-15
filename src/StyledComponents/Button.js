import styled from "styled-components";
import { primaryColor, secondaryColor } from "../StyledComponents/Variables";

const Button = styled.button`
  background-color: ${primaryColor};
  border: 2px solid ${secondaryColor};
  border-radius: 20px;
  color: ${secondaryColor};
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
