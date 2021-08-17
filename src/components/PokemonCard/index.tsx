import TypeTag from "components/TypeTag";
import React from "react";

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
  id: string;
  types: any[];
  sprites: string;
  ref?: any;
  loading: boolean;
}

const PokemonCard = ({ name, id, types, sprites, loading }: PokemonCardProps) => {
  return (
    loading ? ():
    (

      <CardContainer to={`/pokemon/${id}`} type={types[0].pokemon_v2_type.name}>
      <TextContainer>
      <div>
      <PokemonNumber>{"#" + id}</PokemonNumber>
      <Dots />
      </div>
      <PokemonName>{name}</PokemonName>
      <TypesRow>
      {types.map((item, index) => (
        <TypeTag type={item.pokemon_v2_type.name} key={index} />
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
        )
  );
};

export default PokemonCard;
