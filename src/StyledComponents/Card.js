import styled from "styled-components";
import { backgroundColor } from "./Variables";

export const Card = styled.img`
  background-image: url("/images/playing-card-back.png");
  background-color: ${backgroundColor};
  background-size: cover;
  border-radius: 7px;
  height: 350px;
  width: 250px;
`;
