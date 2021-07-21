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
  types: any[];
  sprites: string;
}

const PokemonCard = ({ name, number, types, sprites }: PokemonCardProps) => {
  return (
    <CardContainer type={types[0].name}>
      <TextContainer>
        <div>
          <PokemonNumber>{"#" + number}</PokemonNumber>
          <Dots />
        </div>
        <PokemonName>{name}</PokemonName>
        <TypesRow>
          {types.map((item) => (
            <TypeTag type={item.name} />
          ))}
        </TypesRow>
      </TextContainer>
      <PokemonImageContainer>
        <PokemonSprite src={sprites} />
        <PokemonShadow src={sprites} />
      </PokemonImageContainer>
      <BackGroundImageContainer>
        <Pokeball />
      </BackGroundImageContainer>
    </CardContainer>
  );
};

export default PokemonCard;
