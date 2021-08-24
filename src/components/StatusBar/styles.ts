import styled from "styled-components";
import { TypeStyle } from "utils/TypeStyle";

interface BarProps {
  pokemonPoints: number;
  maxPoints: number;
  type: string;
}

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 10% 90%;
  grid-template-areas: "title bar";
`;

export const Title = styled.span`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 18px;
  grid-area: "title";
  align-self: center;
  color: var(--midGray);
`;

export const BarContainer = styled.div`
  background-color: var(--midGray);
  margin: 5px 0px;
  grid-area: "bar";
  display: flex;
`;

export const Bar = styled.div<BarProps>`
  display: flex;
  transition: 1s ease-in-out;
  width: ${({ pokemonPoints, maxPoints }) => {
    return (pokemonPoints * 100) / maxPoints + `%`;
  }};

  ${({ type }) => {
    const typeStyle = TypeStyle(type);
    return `background: ${typeStyle.secondaryColor}`;
  }}
`;

export const Number = styled.span`
  color: #fff;
  font-weight: bold;
  padding: 2px 4px;
`;

export default BarContainer;
