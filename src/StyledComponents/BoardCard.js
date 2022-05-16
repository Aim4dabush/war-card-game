import styled from "styled-components";
import { backgroundColor, shadow } from "../StyledComponents/Variables";

export const BoardCard = styled.div`
  background-color: ${backgroundColor};
  border: 3px solid ${shadow};
  border-radius: 10px;
  display: flex;
  justify-content: flex-end;
  height: 900px;
  position: relative;
  width: 1800px;
`;
