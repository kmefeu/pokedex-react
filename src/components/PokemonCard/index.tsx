import React from "react";
import TypeTag from "../TypeTag";
import {
  CardContainer,
  TextContainer,
  PokemonName,
  PokemonNumber,
  TypesRow,
  PokemonImageContainer,
  PokemonSprite,
  PokemonShadow,
  BackGroundImageContainer,
  Dots,
  Pokeball,
} from "./styles";

interface PokemonCardProps {
  name: string;
  number: string;
  types: string[];
  sprites: string;
}

const PokemonCard = ({ name, number, types, sprites }: PokemonCardProps) => {
  return (
    <CardContainer type={types[0]}>
      <TextContainer>
        <PokemonNumber>{"#" + number}</PokemonNumber>
        <PokemonName>{name}</PokemonName>
        <TypesRow>
          <TypeTag type={types[0]} />
          <TypeTag type={types[1]} />
        </TypesRow>
      </TextContainer>
      <PokemonImageContainer>
        <PokemonSprite src={sprites} />
        <PokemonShadow src={sprites} />
      </PokemonImageContainer>
      <BackGroundImageContainer>
        <Dots />
        <Pokeball />
      </BackGroundImageContainer>
    </CardContainer>
  );
};

export default PokemonCard;
