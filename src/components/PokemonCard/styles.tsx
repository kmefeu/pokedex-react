import styled from "styled-components";
import PokeballImage from "../../assets/images/svg/pokeball.svg";
import { TypeStyle } from "../../utils/TypeStyle";

interface CardContainerProps {
  type: any;
}

const BaseHeight = 140;
const ImageWidth = 180;
const BasePadding = 30;
const TitleSize = 32;
const NumberSize = 20;
const BorderRadius = 8;
const CardsHeightSpacing = 30;

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

  &:hover {
    animation: 10s linear infinite moveRightCardBackGround;
    background-image: linear-gradient(
      45deg,
      transparent 45%,
      rgba(255, 255, 255, 0.65) 45%,
      rgba(255, 255, 255, 0.1) 70%,
      transparent 70%
    );
    transform: scale(1.05);
  }

  @keyframes moveRightCardBackGround {
    0% {
      background-position: 0 0px;
    }
    100% {
      background-position: 2000px;
    }
  }

  ${({ type }) => {
    const typeStyle = TypeStyle(type);
    return `background: ${typeStyle.secondaryColor}`;
  }}
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PokemonName = styled.span`
  text-transform: capitalize;
  font-weight: bold;
  margin-top: -${NumberSize / 3 + "px"};
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

export const BackGroundImageContainer = styled.div`
  box-sizing: border-box;
  position: absolute;
  overflow: hidden;
  margin-left: -${BasePadding + "px"};
  height: ${BaseHeight + "px"};
  width: 100%;
  border-radius: ${BorderRadius + "px"};
`;

export const Dots = styled.div``;

export const Pokeball = styled.div`
  position: absolute;
  width: ${BaseHeight + "px"};
  height: ${BaseHeight + "px"};
  right: -${-20 + BasePadding + "px"};
  top: 0px;
  background-size: 100%;
  opacity: 0.75;
  background-image: url(${PokeballImage});
`;

export default CardContainer;
