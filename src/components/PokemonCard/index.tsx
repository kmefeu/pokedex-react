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
  ref?: any;
}

const PokemonCard = ({ name, number, types, sprites }: PokemonCardProps) => {
  return (
    <CardContainer type={types[0].type.name}>
      <TextContainer>
        <div>
          <PokemonNumber>{"#" + number}</PokemonNumber>
          <Dots />
        </div>
        <PokemonName>{name}</PokemonName>
        <TypesRow>
          {types.map((item, index) => (
            <TypeTag type={item.type.name} key={index} />
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
