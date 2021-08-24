import styled from "styled-components";
import { TypeStyle } from "utils/TypeStyle";

interface CardContainerProps {
  type: any;
}

export const Container = styled.div`
  display: flex;
  height: 100vh;
  box-sizing: border-box;
`;

export const LeftContainer = styled.div<CardContainerProps>`
  width: 60%;
  padding: 20px;
  transition: 1s ease-in-out;
  ${({ type }) => {
    const typeStyle = TypeStyle(type);
    return `background: ${typeStyle.secondaryColor}`;
  }};
`;

export const PokemonIdRow = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PokemonId = styled.span`
  margin-top: 100px;
  font-size: 36px;
  font-weight: bolder;
  color: var(--lightDark);
`;

export const PokemonName = styled.span`
  width: 100%;
  font-style: normal;
  font-weight: bold;
  font-size: 9vw;
  line-height: 1em;
  letter-spacing: 0.5;
  color: var(--darkWhite);
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 1.5px;
  -webkit-text-stroke-color: var(--darkWhite);
  text-transform: uppercase;
`;

export const PokemonTypesRow = styled.div`
  display: flex;
`;

export const PokemonSpritesRow = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PokemonSprite = styled.img`
  height: 360px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  image-rendering: -moz-crisp-edges;
  image-rendering: -webkit-crisp-edges;
  image-rendering: pixelated;
  image-rendering: crisp-edges;
`;

export const PokemonShadow = styled.img`
  width: 400px;
  height: 50px;
  margin: 0 auto 0;
  filter: blur(5px) brightness(0%) opacity(60%);
  transform: skew(-50deg) translate(-55px, -80px);
`;

export const RightContainer = styled.div`
  width: 40%;
  background-color: var(--darkWhite);
  padding: 45px;
`;

export const ChartContainer = styled.div``;

export const FlavorText = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 32px;
  line-height: 46px;
  letter-spacing: 0.025em;
  width: 100%;
  color: var(--midGray);
`;

export const Line = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  width: 100%;
  height: 1px;
  background-color: var(--midGray);
`;

export const PokemonStats = styled.div`
  color: var(--midGray);

  ul {
    padding: 0;
  }

  li {
    font-weight: 300;
    font-size: 26px;
    line-height: 22px;
    margin-bottom: 25px;
    text-transform: capitalize;
    list-style: none;

    b {
      font-weight: 500;
      font-size: 26px;
      line-height: 32px;
      margin-right: 10px;
    }
  }
`;
