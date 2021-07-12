import styled from "styled-components";
import PokeballImage from "../../assets/images/svg/pokeball.svg";
import { TypeStyle } from "../../utils/TypeStyle";

interface CardContainerProps {
  type: string;
}

const BaseHeight = 140;
const ImageWidth = 180;
const BasePadding = 30;
const TitleSize = 32;
const NumberSize = 20;
const BorderRadius = 8;
const CardsHeightSpacing = 25;

export const CardContainer = styled.div<CardContainerProps>`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  position: relative;
  height: ${BaseHeight + "px"};
  padding: ${BasePadding + "px"};
  margin: ${CardsHeightSpacing + "px"} auto;
  box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.25);
  border-radius: ${BorderRadius + "px"};

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
  margin-top: -${NumberSize / 2 + "px"};
  font-size: ${TitleSize + "px"};
  color: #ffffff;
`;

export const PokemonNumber = styled.span`
  font-weight: bold;
  font-size: ${NumberSize + "px"};
  color: rgba(0, 0, 0, 0.48);
`;

export const TypesRow = styled.div`
  display: flex;
  padding: 0px -5px;
  margin-top: 5px;
`;

export const PokemonImageContainer = styled.div``;

export const PokemonSprite = styled.img`
  position: absolute;
  margin-right: ${BasePadding + "px"};
  right: 0;
  bottom: 10px;
  width: ${ImageWidth + "px"};
  z-index: 1;
`;

export const PokemonShadow = styled.img`
  position: absolute;
  margin-right: ${BasePadding + "px"};
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
  right: -${BasePadding + "px"};
  top: 0px;
  background-size: 100%;
  opacity: 0.75;
  background-image: url(${PokeballImage});
`;

export default CardContainer;
