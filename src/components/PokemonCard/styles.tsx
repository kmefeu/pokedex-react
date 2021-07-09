import styled from "styled-components";
import PokeballImage from "../../assets/images/svg/pokeball.svg";
import { TypeStyle } from "../../utils/TypeStyle";

interface CardContainerProps {
  type: string;
}

const BaseHeight = 240;
const ImageWidth = 300;
const BasePadding = 50;

export const CardContainer = styled.div<CardContainerProps>`
  display: flex;
  justify-content: space-between;
  position: relative;
  height: ${BaseHeight + "px"};
  padding: ${BasePadding + "px"};
  margin: 50px auto;
  box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.25);
  border-radius: 18px;

  ${({ type }) => {
    const color = TypeStyle(type);
    return `background: ${color.secondaryColor}`;
  }}
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PokemonName = styled.span`
  text-transform: capitalize;
  font-weight: bold;
  font-size: 65px;
  color: #ffffff;
`;

export const PokemonNumber = styled.span`
  font-weight: bold;
  font-size: 32px;
  color: rgba(0, 0, 0, 0.48);
`;

export const TypesRow = styled.div`
  display: flex;
  padding: 0px -5px;
`;

export const PokemonImageContainer = styled.div``;

export const PokemonSprite = styled.img`
  position: absolute;
  right: 0;
  bottom: 10px;
  width: ${ImageWidth + "px"};
  z-index: 1;
`;

export const PokemonShadow = styled.img`
  position: absolute;
  width: ${ImageWidth + "px"};
  height: 40px;
  right: -25px;
  bottom: 18px;
  filter: blur(5px) brightness(0%) opacity(60%);
  transform: skew(-50deg);
  transition: 1s ease-in-out;
`;

export const BackGroundImageContainer = styled.div``;

export const Dots = styled.div``;

export const Pokeball = styled.div`
  position: absolute;
  width: ${BaseHeight + "px"};
  height: ${BaseHeight + "px"};
  right: 0px;
  top: 0px;
  background-size: 100%;
  opacity: 0.75;
  background-image: url(${PokeballImage});
`;

export default CardContainer;
