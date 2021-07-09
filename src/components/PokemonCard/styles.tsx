import styled from "styled-components";
import PokeballImage from "../../assets/images/svg/pokeball.svg";

interface CardContainerProps {
  type: string;
}

export const CardContainer = styled.div<CardContainerProps>`
  display: flex;
  justify-content: space-between;
  padding: 50px;
  margin: 50px auto;
  width: 70%;
  height: 240px;
  box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.25);
  border-radius: 18px;

  ${({ type }) => {
    if (type === "grass") {
      return `background: #7fb781;`;
    }
    if (type === "poison") {
      return `background: #9D43C2;`;
    }
  }}
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PokemonName = styled.span`
  text-transform: capitalize;
  font-style: normal;
  font-weight: bold;
  font-size: 65px;
  color: #ffffff;
`;

export const PokemonNumber = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  color: rgba(0, 0, 0, 0.48);
`;

export const TypesRow = styled.div`
  display: flex;
  padding: 0px -5px;
`;

export const PokemonImageContainer = styled.div`
  position: relative;
`;

export const Pokemon = styled.img`
  position: absolute;
  left: -333px;
  width: 333px;
  height: 283px;
  z-index: 1;
`;

export const PokemonShadow = styled.img`
  width: 250px;
  height: 40px;
  position: absolute;
  filter: blur(5px) brightness(0%) opacity(60%);
  transform: skew(-50deg) translate(10px, 240px);
  transition: 1s ease-in-out;
`;

export const BackGroundImageContainer = styled.div`
  position: absolute;
  right: 10;
`;

export const Dots = styled.div``;

export const Pokeball = styled.div`
  width: 240px;
  height: 240px;
  position: absolute;
  background-size: 100%;
  background-color: red;
  background-image: url(${PokeballImage});
`;

export default CardContainer;
